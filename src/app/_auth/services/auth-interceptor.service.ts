import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';

import { throwError, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, finalize, take, switchMap, tap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment.develop";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  private token = 'token';
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    public auth: AuthService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url.includes(environment.api.urls.auth.token)) {
        req = req.clone({
            setHeaders: {
              Authorization: 'Basic YWRtaW46cXdlcnR5',
            },
        });
        return next.handle(req);
    }

    if (sessionStorage.getItem('access_token')) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
          },
        });
    }
    console.warn('AuthInterceptor');
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }

    req = this.addAuthenticationToken(req);

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {

          // 401 errors are most likely going to be because we have an expired token that we need to refresh.
            if (this.refreshTokenInProgress) {
            // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
            // which means the new token is ready and we can retry the request again
            return this.refreshTokenSubject.pipe(
                filter(result => result !== null),
                take(1),
                switchMap(() => next.handle(this.addAuthenticationToken(req)))
            );
            } else {
              this.refreshTokenInProgress = true;

              // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
              this.refreshTokenSubject.next(null);

              this.router.navigateByUrl('account');
              return of(null);
            }
        } else {
          return throwError(error);
        }
      })
    );
  }

  private refreshAccessToken(): Observable<any> {

    const formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    formData.append('scope', 'read');
    formData.append('refresh_token', sessionStorage.getItem('refresh_token'));

    return this.httpClient.post<any>(environment.api.urls.auth.token, formData)
        .pipe(
            tap((response) => {
                sessionStorage.setItem('access_token', response.access_token);
                sessionStorage.setItem('refresh_token', response.refresh_token);
            }),
            map(response => {
               return response.refresh_token;
            })
        );
    }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    // if (!this.token) {
    //   return request;
    // }
    // If you are calling an outside domain then do not add the token.
    // if (!request.url.match(/www.mydomain.com\//)) {
    //   return request;
    // }

    request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
        },
    });

    console.log('change header');
    return request;
  }
}

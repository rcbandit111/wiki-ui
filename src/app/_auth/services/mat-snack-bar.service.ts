import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class MatSnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnack(
    message: string,
    status: any,
    verticalPosition: any = 'top',
    horizontalPosition: any = 'right',
    duration: any = 5000
  ) {
    var snackPanelClass;
    switch (status) {
      case ResponseStatus.OK:
        snackPanelClass = NotificationTypeEnum.Success;
        break;
      case ResponseStatus.Info:
        snackPanelClass = NotificationTypeEnum.Info;
        break;
      case ResponseStatus.Error:
        snackPanelClass = NotificationTypeEnum.Danger;
        break;
      case ResponseStatus.Warning:
        snackPanelClass = NotificationTypeEnum.Warning;
        break;
      default:
        snackPanelClass = status;
        break;
    }
    return this.snackBar.open(message, null, {
      duration: duration,
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition,
      panelClass: [snackPanelClass],
    });
  }
}

export enum NotificationTypeEnum {
  Info = 'isa_info',
  Warning = 'isa_warning',
  Success = 'isa_success',
  Danger = 'isa_error',
}

export enum ResponseStatus {
  /// <summary>
  /// Success
  /// </summary>
  OK = 200,
  /// <summary>
  /// Error
  /// </summary>
  Error = 400,
  /// <summary>
  /// Info
  /// </summary>
  Info = 1,
  /// <summary>
  /// Warning
  /// </summary>
  Warning = 3,
  /// <summary>
  /// LimitExceeded
  /// </summary>
  LimitExceeded = 4,
  /// <summary>
  /// Forbidden
  /// </summary>
  Forbidden = 5,
  /// <summary>
  /// Unauthorized
  /// </summary>
  Unauthorized = 401,
  BadRequest = 404,
}

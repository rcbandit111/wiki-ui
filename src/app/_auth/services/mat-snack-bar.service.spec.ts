import { TestBed } from '@angular/core/testing';

import { MatSnackBarService } from './mat-snack-bar.service';

describe('MatSnackBarService', () => {
  let service: MatSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

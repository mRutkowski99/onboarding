import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  private config: MatSnackBarConfig = {
    duration: 3000,
  };

  info(message: string) {
    this.snackbar.open(message, undefined, {
      ...this.config,
    });
  }

  success(message: string) {
    this.snackbar.open(message, undefined, {
      ...this.config,
      panelClass: 'snackbar--success',
    });
  }

  error(message: string) {
    this.snackbar.open(message, undefined, {
      ...this.config,
      panelClass: 'snackbar--error',
    });
  }
}

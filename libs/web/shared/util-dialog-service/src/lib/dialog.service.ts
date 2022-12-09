import { DialogConfig } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GenericDialogPayload } from '@onboarding/shared/domain';
import { WebSharedUiGenericDialogComponent } from '@onboarding/web/shared/ui-generic-dialog';
import { first, Observable } from 'rxjs';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openGenericDialog(
    message: string,
    onlyConfirm = true,
    yesOptionMsg = 'Confirm',
    noOptionMsg = 'Cancel'
  ): Observable<boolean | undefined> {
    const config = new MatDialogConfig<GenericDialogPayload>();
    config.data = { message, onlyConfirm, yesOptionMsg, noOptionMsg };

    return this.dialog
      .open<WebSharedUiGenericDialogComponent, GenericDialogPayload, boolean>(
        WebSharedUiGenericDialogComponent,
        config
      )
      .afterClosed()
      .pipe(first());
  }

  openCustomDialog<TInput, TResult>(
    data: TInput,
    component: ComponentType<unknown>,
    config?: DialogConfig
  ): Observable<TResult | undefined> {
    const _config = new MatDialogConfig<TInput>();
    _config.data = { ...data };

    return this.dialog
      .open<unknown, TInput, TResult>(component, _config)
      .afterClosed()
      .pipe(first());
  }
}

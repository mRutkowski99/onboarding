/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DialogService } from '@onboarding/web/shared/util-dialog-service';
import { map, Observable } from 'rxjs';
import { FormContainerComponent } from '../../interfaces/form-container-component.interface';

@Injectable()
export class UnsubmittedFormGuard
  implements CanDeactivate<FormContainerComponent>
{
  constructor(private dialog: DialogService) {}

  canDeactivate(
    component: FormContainerComponent
  ): boolean | Observable<boolean> {
    if (component.dirty === false) return true;

    return this.dialog
      .openGenericDialog(
        'If you leave the page all provided data will be lost',
        false,
        'Leave',
        'Stay'
      )
      .pipe(map((response) => !!response));
  }
}

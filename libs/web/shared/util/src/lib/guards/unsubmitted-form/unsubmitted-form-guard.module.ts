/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { UtilDialogServiceModule } from '@onboarding/web/shared/util-dialog-service';
import { UnsubmittedFormGuard } from './unsubmitted-form.guard';

@NgModule({
  imports: [UtilDialogServiceModule],
  providers: [UnsubmittedFormGuard],
})
export class UnsubmittedFormGuardModule {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DialogService,
  UtilDialogServiceModule,
} from '@onboarding/web/shared/util-dialog-service';
import { WebSharedNavbarUiComponent } from '@onboarding/web/shared/navbar/ui';

@Component({
  selector: 'onboarding-feature-navbar',
  standalone: true,
  imports: [CommonModule, UtilDialogServiceModule, WebSharedNavbarUiComponent],
  templateUrl: './web-shared-navbar-feature.component.html',
  styleUrls: ['./web-shared-navbar-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebSharedNavbarFeatureComponent {
  constructor(private dialogService: DialogService) {}

  onInfoButtonClick() {
    this.dialogService.openGenericDialog(
      'Welcome to my onboarding app which is recipe book for Los Pollos Hermanos restaurant.\n It is restaurant from my favourite series "Breaking Bad" and its prequel "Better Call Saul" and has been facade bussiness for Gustavo Fring and its methamphetamine empire. It specializes in fried chickens.\n Author: Miłosz Rutkowski',
      true,
      'Ok'
    );
  }
}

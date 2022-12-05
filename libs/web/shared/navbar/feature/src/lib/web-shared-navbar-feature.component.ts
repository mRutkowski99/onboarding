import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSharedNavbarUiComponent } from '../../../ui/src';

@Component({
  selector: 'onboarding-feature-navbar',
  standalone: true,
  imports: [CommonModule, WebSharedNavbarUiComponent],
  templateUrl: './web-shared-navbar-feature.component.html',
  styleUrls: ['./web-shared-navbar-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebSharedNavbarFeatureComponent {
  onInfoButtonClick() {
    //
  }
}

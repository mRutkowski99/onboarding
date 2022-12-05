import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'onboarding-ui-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './web-shared-navbar-ui.component.html',
  styleUrls: ['./web-shared-navbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebSharedNavbarUiComponent {
  @Output() infoButtonClick = new EventEmitter<void>();

  onInfoButtonClick() {
    this.infoButtonClick.emit();
  }
}

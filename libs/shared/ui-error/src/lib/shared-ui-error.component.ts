import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'onboarding-ui-error',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './shared-ui-error.component.html',
  styleUrls: ['./shared-ui-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiErrorComponent {
  @Output() reload = new EventEmitter<void>();

  onReload() {
    this.reload.emit();
  }
}

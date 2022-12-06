import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'onboarding-ui-loading',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './shared-ui-loading.component.html',
  styleUrls: ['./shared-ui-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiLoadingComponent {}

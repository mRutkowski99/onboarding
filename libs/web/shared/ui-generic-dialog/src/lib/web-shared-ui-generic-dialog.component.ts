import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GenericDialogPayload } from '@onboarding/shared/domain';

@Component({
  selector: 'onboarding-web-shared-ui-generic-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './web-shared-ui-generic-dialog.component.html',
  styleUrls: ['./web-shared-ui-generic-dialog.component.scss'],
})
export class WebSharedUiGenericDialogComponent {
  paragraphs: string[];
  yesOptionMsg: string;
  noOptionMsg: string;
  onlyConfirm: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) data: GenericDialogPayload) {
    this.paragraphs = data.message.split('\n');
    this.yesOptionMsg = data.yesOptionMsg;
    this.noOptionMsg = data.noOptionMsg;
    this.onlyConfirm = data.onlyConfirm;
  }
}

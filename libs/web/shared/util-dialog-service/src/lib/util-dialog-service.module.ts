import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [CommonModule, MatDialogModule],
  providers: [DialogService],
})
export class UtilDialogServiceModule {}

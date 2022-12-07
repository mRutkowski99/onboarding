import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackbarService],
})
export class UtilSnackbarServiceModule {}

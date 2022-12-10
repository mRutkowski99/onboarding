import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { AddRecipeDataService } from './services/add-recipe-data.service';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  providers: [AddRecipeDataService],
})
export class WebRecipesAddRecipeDataAccessModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { EditRecipeDataService } from './services/edit-recipe-data.service';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  providers: [EditRecipeDataService],
})
export class WebRecipesEditRecipeDataAccessModule {}

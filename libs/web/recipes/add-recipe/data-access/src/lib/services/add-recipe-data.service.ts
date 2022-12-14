import { Injectable } from '@angular/core';
import { RecipeDataService } from '@onboarding/shared/data-access';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { Observable } from 'rxjs';

@Injectable()
export class AddRecipeDataService {
  constructor(private apiService: RecipeDataService) {}

  createRecipe(recipe: CreateUpdateRecipePayload): Observable<void> {
    return this.apiService.create({ ...recipe });
  }
}

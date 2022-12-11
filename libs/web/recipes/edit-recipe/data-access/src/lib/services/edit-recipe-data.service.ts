import { Injectable } from '@angular/core';
import { RecipeDataService } from '@onboarding/shared/data-access';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';
import { Observable } from 'rxjs';

@Injectable()
export class EditRecipeDataService {
  constructor(private apiService: RecipeDataService) {}

  getRecipeToEdit(id: string): Observable<Recipe> {
    return this.apiService.getById(id);
  }

  updateRecipe(
    id: string,
    payload: CreateUpdateRecipePayload
  ): Observable<void> {
    return this.apiService.update(id, payload);
  }
}

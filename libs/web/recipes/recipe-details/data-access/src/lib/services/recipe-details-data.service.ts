import { Injectable } from '@angular/core';
import { RecipeDataService } from '@onboarding/shared/data-access';
import { Recipe } from '@onboarding/shared/domain';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeDetailsDataService {
  constructor(private apiService: RecipeDataService) {}

  getRecipeDetails(id: string): Observable<Recipe> {
    return this.apiService.getById(id);
  }

  deleteRecipe(id: string): Observable<void> {
    return this.apiService.delete(id);
  }
}

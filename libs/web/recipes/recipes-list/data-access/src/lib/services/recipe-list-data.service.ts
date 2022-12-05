import { Injectable } from '@angular/core';
import { RecipeDataService } from '@onboarding/shared/data-access';
import { Recipe } from '@onboarding/shared/domain';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeListDataService {
  constructor(private apiService: RecipeDataService) {}

  listAllRecipes(): Observable<Recipe[]> {
    return this.apiService.getAll();
  }

  deleteRecipe(id: string): Observable<void> {
    return this.apiService.delete(id);
  }
}

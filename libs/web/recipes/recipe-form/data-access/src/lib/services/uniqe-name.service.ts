import { Injectable } from '@angular/core';
import { RecipeDataService } from '@onboarding/shared/data-access';
import { map, Observable } from 'rxjs';

@Injectable()
export class UniqueRecipeNameService {
  constructor(private apiService: RecipeDataService) {}

  isNameUnique(name: string): Observable<boolean> {
    return this.apiService
      .getAll()
      .pipe(map((recipes) => recipes.every((recipe) => recipe.name !== name)));
  }
}

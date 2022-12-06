import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '@onboarding/shared/domain';
import { catchError, Observable, of } from 'rxjs';
import { RecipeDataService } from './recipe-data.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe | null> {
  constructor(private recipeService: RecipeDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe | null> {
    return this.recipeService
      .getById(route.paramMap.get('id') ?? '')
      .pipe(catchError(() => of(null)));
  }
}

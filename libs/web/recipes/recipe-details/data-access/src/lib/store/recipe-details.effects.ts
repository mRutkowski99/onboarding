import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { EMPTY, map } from 'rxjs';
import { RecipeDetailsDataService } from '../services/recipe-details-data.service';
import { RecipeDetailsActions } from './recipe-details.actions';

@Injectable()
export class RecipeDetailsEfeects {
  constructor(
    private actions$: Actions,
    private apiService: RecipeDetailsDataService
  ) {}

  loadRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeDetailsActions.getRecipeDetails),
      fetch({
        run: ({ id }) =>
          this.apiService
            .getRecipeDetails(id)
            .pipe(
              map((data) =>
                RecipeDetailsActions.getRecipeDetailsSuccess({ data })
              )
            ),
        onError: () =>
          RecipeDetailsActions.getrecipeDetailsFail({
            error: 'An error occured while getting the recipe details',
          }),
      })
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeDetailsActions.deleteRecipe),
      pessimisticUpdate({
        run: ({ id }) =>
          this.apiService
            .deleteRecipe(id)
            .pipe(map(() => RecipeDetailsActions.deleteRecipeSuccess())),

        onError: () => EMPTY,
      })
    )
  );
}

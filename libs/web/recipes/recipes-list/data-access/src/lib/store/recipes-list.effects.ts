import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pessimisticUpdate } from '@nrwl/angular';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';
import { RecipeListDataService } from '../services/recipe-list-data.service';
import { RecipesListActions } from './recipes-list.actions';

@Injectable()
export class RecipesListEffects {
  constructor(
    private actions$: Actions,
    private apiService: RecipeListDataService
  ) {}

  loadRecipesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesListActions.getRecipesList),
      fetch({
        run: () => {
          return this.apiService
            .listAllRecipes()
            .pipe(
              map((data) => RecipesListActions.getRecipesListSuccess({ data }))
            );
        },

        onError: () =>
          RecipesListActions.getRecipesListFail({
            error: 'An error occured while getting recipes.',
          }),
      })
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesListActions.deleteRecipe),
      pessimisticUpdate({
        run: ({ id }) => {
          return this.apiService
            .deleteRecipe(id)
            .pipe(map(() => RecipesListActions.getRecipesList()));
        },

        onError: () =>
          RecipesListActions.getRecipesListFail({ error: 'An error occured' }),
      })
    )
  );
}

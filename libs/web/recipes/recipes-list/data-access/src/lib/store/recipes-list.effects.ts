import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pessimisticUpdate } from '@nrwl/angular';
import { fetch } from '@nrwl/angular';
import {
  Event,
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { SnackbarService } from '@onboarding/web/shared/util-snackbar-service';
import { EMPTY, map } from 'rxjs';
import { RecipeListDataService } from '../services/recipe-list-data.service';
import { RecipesListActions } from './recipes-list.actions';

@Injectable()
export class RecipesListEffects {
  constructor(
    private actions$: Actions,
    private apiService: RecipeListDataService,
    private snackbar: SnackbarService,
    private eventBus: EventBusService
  ) {}

  loadRecipesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesListActions.getRecipesList),
      fetch({
        run: ({ omitCache }) => {
          return this.apiService
            .listAllRecipes(omitCache)
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
          return this.apiService.deleteRecipe(id).pipe(
            map(() => {
              this.eventBus.emit(new Event(EventNameEnum.RecipeDeleted, id));
              this.snackbar.success('Recipe successfully deleted');
              return RecipesListActions.getRecipesList({ omitCache: true });
            })
          );
        },

        onError: () => {
          this.snackbar.error('Error occured');
          return EMPTY;
        },
      })
    )
  );
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import {
  Event,
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { SnackbarService } from '@onboarding/web/shared/util-snackbar-service';
import { concatMap, EMPTY, map } from 'rxjs';
import { RecipeDetailsDataService } from '../services/recipe-details-data.service';
import { RecipeDetailsActions } from './recipe-details.actions';

@Injectable()
export class RecipeDetailsEfects {
  constructor(
    private actions$: Actions,
    private apiService: RecipeDetailsDataService,
    private snackbar: SnackbarService,
    private router: Router,
    private eventBus: EventBusService
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

        onError: () => {
          this.snackbar.error('Error occured');
          return EMPTY;
        },
      })
    )
  );

  deleteRecipeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipeDetailsActions.deleteRecipeSuccess),
        concatMap(() => {
          this.snackbar.success('Recipe successfully deleted');
          this.router.navigate(['']);
          this.eventBus.emit(new Event(EventNameEnum.RecipeDeleted));
          return EMPTY;
        })
      ),
    { dispatch: false }
  );
}

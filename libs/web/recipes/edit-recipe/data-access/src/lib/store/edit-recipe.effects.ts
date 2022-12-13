import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { recipeIdSelector } from '@onboarding/shared/data-access';
import {
  Event,
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { SnackbarService } from '@onboarding/web/shared/util-snackbar-service';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { EditRecipeDataService } from '../services/edit-recipe-data.service';
import { EditRecipeActions } from './edit-recipe.actions';

@Injectable()
export class EditRecipeEffects {
  constructor(
    private actions$: Actions,
    private apiService: EditRecipeDataService,
    private snackbar: SnackbarService,
    private eventBus: EventBusService,
    private store: Store
  ) {}

  getRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditRecipeActions.getRecipe),
      switchMap(() => this.store.select(recipeIdSelector)),
      fetch({
        run: (id) =>
          this.apiService
            .getRecipeToEdit(id)
            .pipe(
              map((recipe) => EditRecipeActions.getRecipeSuccess({ recipe }))
            ),

        onError: () =>
          EditRecipeActions.getRecipeFail({ error: 'An error occured' }),
      })
    )
  );

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditRecipeActions.submitRecipeForm),
      withLatestFrom(this.store.select(recipeIdSelector)),
      map(([{ payload }, id]) =>
        EditRecipeActions.updateRecipe({ payload, id })
      ),
      pessimisticUpdate({
        run: ({ id, payload }) =>
          this.apiService
            .updateRecipe(id, payload)
            .pipe(map(() => EditRecipeActions.updateRecipeSuccess())),

        onError: () => EditRecipeActions.updateRecipeFail(),
      })
    )
  );

  updateRecipeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EditRecipeActions.updateRecipeSuccess),
        map(() => {
          this.snackbar.success('Recipe has been successfully updated');
          this.eventBus.emit(new Event(EventNameEnum.RecipeUpdated));
        })
      ),
    { dispatch: false }
  );

  updateRecipeFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EditRecipeActions.updateRecipeFail),
        map(() => this.snackbar.error('An error occured'))
      ),
    { dispatch: false }
  );
}

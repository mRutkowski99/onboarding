import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import {
  Event,
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { SnackbarService } from '@onboarding/web/shared/util-snackbar-service';
import { map } from 'rxjs';
import { EditRecipeDataService } from '../services/edit-recipe-data.service';
import { EditRecipeActions } from './edit-recipe.actions';

@Injectable()
export class EditRecipeEffects {
  constructor(
    private actions$: Actions,
    private apiService: EditRecipeDataService,
    private snackbar: SnackbarService,
    private eventBus: EventBusService
  ) {}

  getRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditRecipeActions.getRecipe),
      fetch({
        run: ({ id }) =>
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
      ofType(EditRecipeActions.updateRecipe),
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

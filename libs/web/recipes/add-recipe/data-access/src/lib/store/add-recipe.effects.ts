import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs';
import {
  EventBusService,
  EventNameEnum,
  Event,
} from '@onboarding/web/shared/util-event-bus';
import { SnackbarService } from '@onboarding/web/shared/util-snackbar-service';
import { AddRecipeDataService } from '../services/add-recipe-data.service';
import { AddRecipeActions } from './add-recipe.actions';

@Injectable()
export class AddRecipeEffects {
  constructor(
    private actions$: Actions,
    private apiService: AddRecipeDataService,
    private snackbar: SnackbarService,
    private eventBus: EventBusService
  ) {}

  createRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddRecipeActions.createRecipe),
      pessimisticUpdate({
        run: ({ payload }) =>
          this.apiService
            .createRecipe(payload)
            .pipe(map(() => AddRecipeActions.createRecipeSuccess())),

        onError: () => AddRecipeActions.createRecipeFail(),
      })
    )
  );

  createRecipeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddRecipeActions.createRecipeSuccess),
        map(() => {
          this.snackbar.success('Recipe has been successfully created');
          this.eventBus.emit(new Event(EventNameEnum.RecipeCreated));
        })
      ),
    { dispatch: false }
  );

  createRecipeFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AddRecipeActions.createRecipeSuccess),
        map(() => this.snackbar.error('An error occured'))
      ),
    { dispatch: false }
  );
}

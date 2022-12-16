import { createAction, props } from '@ngrx/store';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';

enum Types {
  CreateRecipe = '[Add Recipe] Create Recipe',
  CreateRecipeSuccess = '[Add Recipe] Create Recipe Success',
  CreateRecipeFail = '[Add Recipe] Add Recipe Fail',
  ResetState = '[Add Recipe] Reset State',
}

export class AddRecipeActions {
  static createRecipe = createAction(
    Types.CreateRecipe,
    props<{ payload: CreateUpdateRecipePayload }>()
  );

  static createRecipeSuccess = createAction(Types.CreateRecipeSuccess);

  static createRecipeFail = createAction(Types.CreateRecipeFail);

  static resetState = createAction(Types.ResetState);
}

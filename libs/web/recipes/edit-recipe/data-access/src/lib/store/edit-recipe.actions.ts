import { props, createAction } from '@ngrx/store';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';

enum Types {
  GetRecipe = '[Edit Recipe] Get Recipe',
  GetRecipeSuccess = '[Edit Recipe] Get Recipe Success',
  GetRecipeFail = '[Edit Recipe] Get REcipe Fail',
  UpdateRecipe = '[Edit Recipe] Update Recipe',
  UpdateRecipeSuccess = '[Edit Recipe] Update Recipe Success',
  UpdateRecipeFail = '[Edit Recipe] Update Recipe Fail',
}

export class EditRecipeActions {
  static getRecipe = createAction(Types.GetRecipe, props<{ id: string }>());

  static getRecipeSuccess = createAction(
    Types.GetRecipeSuccess,
    props<{ recipe: Recipe }>()
  );

  static getRecipeFail = createAction(
    Types.GetRecipeFail,
    props<{ error: string }>()
  );

  static updateRecipe = createAction(
    Types.UpdateRecipe,
    props<{ id: string; payload: CreateUpdateRecipePayload }>()
  );

  static updateRecipeSuccess = createAction(Types.UpdateRecipeSuccess);

  static updateRecipeFail = createAction(Types.UpdateRecipeFail);
}

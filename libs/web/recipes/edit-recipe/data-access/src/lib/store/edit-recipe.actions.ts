import { props, createAction } from '@ngrx/store';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';

enum Types {
  GetRecipe = '[Edit Recipe] Get Recipe',
  GetRecipeSuccess = '[Edit Recipe] Get Recipe Success',
  GetRecipeFail = '[Edit Recipe] Get Recipe Fail',
  SubmitRecipeForm = '[Edit Recipe] Submit Recipe Form',
  UpdateRecipe = '[Edit Recipe] Update Recipe',
  UpdateRecipeSuccess = '[Edit Recipe] Update Recipe Success',
  UpdateRecipeFail = '[Edit Recipe] Update Recipe Fail',
  ResetState = '[Edit Recipe] Reset State',
}

export class EditRecipeActions {
  static getRecipe = createAction(Types.GetRecipe);

  static getRecipeSuccess = createAction(
    Types.GetRecipeSuccess,
    props<{ recipe: Recipe }>()
  );

  static getRecipeFail = createAction(
    Types.GetRecipeFail,
    props<{ error: string }>()
  );

  static submitRecipeForm = createAction(
    Types.SubmitRecipeForm,
    props<{ payload: CreateUpdateRecipePayload }>()
  );

  static updateRecipe = createAction(
    Types.UpdateRecipe,
    props<{ payload: CreateUpdateRecipePayload; id: string }>()
  );

  static updateRecipeSuccess = createAction(Types.UpdateRecipeSuccess);

  static updateRecipeFail = createAction(Types.UpdateRecipeFail);

  static resetState = createAction(Types.ResetState);
}

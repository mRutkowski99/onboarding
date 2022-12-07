import { createAction, props } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';

enum Types {
  GetRecipeDetails = '[Recipe Details] Get Recipe Details',
  GetRecipeDetailsSuccess = '[Recipe Details] Get Recipe Details Success',
  GetRecipeDetailsFail = '[Recipe Details] Get Recipe Details Fail',
  DeteleRecipe = '[Recipe Details] Delete Recipe',
  DeleteRecipeSuccess = '[Recipe Details] Delete Recipe Success',
}

export class RecipeDetailsActions {
  static getRecipeDetails = createAction(
    Types.GetRecipeDetails,
    props<{ id: string }>()
  );

  static getRecipeDetailsSuccess = createAction(
    Types.GetRecipeDetailsSuccess,
    props<{ data: Recipe }>()
  );

  static getrecipeDetailsFail = createAction(
    Types.GetRecipeDetailsFail,
    props<{ error: string }>()
  );

  static deleteRecipe = createAction(
    Types.DeteleRecipe,
    props<{ id: string }>()
  );

  static deleteRecipeSuccess = createAction(Types.DeleteRecipeSuccess);
}

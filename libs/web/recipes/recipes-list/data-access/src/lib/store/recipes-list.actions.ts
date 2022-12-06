import { createAction, props } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';

enum Types {
  GetRecipesList = '[Recipes List] Get Recipes List',
  GetRecipesListFail = '[Recipes List] Get Recipes List Fail',
  GetRecipesListSuccess = '[Recipes List] Get Recipes List Success',
  DeleteRecipe = '[Recipes List] Delete Recipe',
  ProvideFilter = '[Recipes List] Provide Filter',
  ProvideFilterType = '[Recipes List] Provide Filter Type',
  SelectItem = '[Recipes List] Select Item',
}

export class RecipesListActions {
  static getRecipesList = createAction(Types.GetRecipesList);

  static getRecipesListFail = createAction(
    Types.GetRecipesListFail,
    props<{ error: string }>()
  );

  static getRecipesListSuccess = createAction(
    Types.GetRecipesListSuccess,
    props<{ data: Recipe[] }>()
  );

  static deleteRecipe = createAction(
    Types.DeleteRecipe,
    props<{ id: string }>()
  );

  static provideFilter = createAction(
    Types.ProvideFilter,
    props<{ filter: string }>()
  );

  static provideFilterType = createAction(
    Types.ProvideFilterType,
    props<{ filterType: RecipesListFilterTypeEnum }>()
  );

  static selectItem = createAction(
    Types.SelectItem,
    props<{ id: string | null }>()
  );
}

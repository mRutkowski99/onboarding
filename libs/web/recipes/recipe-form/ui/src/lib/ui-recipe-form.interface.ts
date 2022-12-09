export interface UiRecipeForm {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
}

export interface UiRecipeFormIngredient {
  _id: string;
  name: string;
  quantity: string;
}

interface UiRecipeIngredient {
  name: string;
  quantity: string;
}

export interface UiRecipeDetails {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: UiRecipeIngredient[];
}

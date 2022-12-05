import { Ingredient } from '../models/ingredient.model';

export interface UpdateRecipePayload {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Ingredient[];
}

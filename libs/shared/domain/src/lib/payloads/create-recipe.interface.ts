import { Ingredient } from '../models/ingredient.model';

export interface CreateRecipePayload {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Ingredient[];
}

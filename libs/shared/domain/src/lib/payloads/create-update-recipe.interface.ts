import { Ingredient } from '../models/ingredient.model';

export interface CreateUpdateRecipePayload {
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: Ingredient[];
}

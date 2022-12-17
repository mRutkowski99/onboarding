import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';
import * as crypto from 'crypto';

@Injectable()
export class ApiRecipesService {
  private recipes: Recipe[] = [];

  getAll(): Recipe[] {
    return [...this.recipes];
  }

  getById(id: string): Recipe {
    if (!this.exist(id)) throw new NotFoundException();

    return this.recipes.find((recipe) => recipe._id === id)!;
  }

  create(payload: CreateUpdateRecipePayload) {
    const recipe: Recipe = { ...payload, _id: crypto.randomUUID() };
    this.recipes = [...this.recipes, recipe];
  }

  update(id: string, payload: CreateUpdateRecipePayload) {
    if (!this.exist(id)) throw new BadRequestException();

    this.recipes = this.recipes.map((recipe) =>
      recipe._id === id ? { _id: id, ...payload } : recipe
    );
  }

  delete(id: string) {
    if (!this.exist(id)) throw new BadRequestException();

    this.recipes = this.recipes.filter((recipe) => recipe._id !== id);
  }

  private exist(id: string): boolean {
    return this.recipes.some((recipe) => recipe._id === id);
  }
}

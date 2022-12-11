import { Recipe } from '@onboarding/shared/domain';
import { Cache, CacheData } from './cache.base';

export class RecipesCache extends Cache<Recipe[]> {
  constructor(storageTime: number) {
    super(storageTime);
  }

  store(recipes: Recipe[]): void {
    this.data = new CacheData([...recipes]);
  }

  get(): Recipe[] | null {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.hasValue() ? [...this.data!.value] : null;
  }
}

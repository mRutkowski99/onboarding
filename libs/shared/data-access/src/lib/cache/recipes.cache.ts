import { Inject, Injectable } from '@angular/core';
import { Recipe } from '@onboarding/shared/domain';
import { CACHE_EXPIRE_TIME } from './cache-expire-time.token';
import { Cache, CacheData } from './cache.base';

@Injectable({ providedIn: 'root' })
export class RecipesCache extends Cache<Recipe[]> {
  constructor(@Inject(CACHE_EXPIRE_TIME) storageTime: number) {
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

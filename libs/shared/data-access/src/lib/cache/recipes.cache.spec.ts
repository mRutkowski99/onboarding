import { Recipe } from '@onboarding/shared/domain';
import dayjs = require('dayjs');
import { RecipesCache } from './recipes.cache';

describe('Recipe mock', () => {
  let cache: RecipesCache;
  const storageTime = 60;
  const recipes: Recipe[] = [
    {
      _id: '1',
      description: 'desc',
      name: 'name',
      preparationTimeInMinutes: 30,
      ingredients: [
        { _id: '1', name: 'ing 1 name', quantity: '10' },
        { _id: '2', name: 'ing 2 name', quantity: '15' },
      ],
    },
  ];

  beforeEach(() => {
    cache = new RecipesCache(storageTime);
  });

  test('should store value', () => {
    cache.store(recipes);

    const result = cache.get();
    expect(cache.hasValue).toBe(true);
    expect(result).toHaveLength(recipes.length);
    expect(result?.at(0)).toEqual(recipes.at(0));
  });

  test('should not return value after storage time expired', () => {
    cache.store(recipes);
    jest.useFakeTimers().setSystemTime(
      dayjs()
        .add(storageTime + 10, 'seconds')
        .toDate()
    );

    const result = cache.get();
    expect(result).toBe(null);
  });
});

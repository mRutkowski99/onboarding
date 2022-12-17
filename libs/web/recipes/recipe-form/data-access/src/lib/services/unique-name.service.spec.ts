import { of } from 'rxjs';
import { UniqueRecipeNameService } from './uniqe-name.service';
import { Recipe } from '@onboarding/shared/domain';

describe('UniqueRecipeNameService', () => {
  let service: UniqueRecipeNameService;
  let apiServiceMock: any;

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
    apiServiceMock = {
      getAll: jest.fn(),
    };

    service = new UniqueRecipeNameService(apiServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return true', () => {
    jest.spyOn(apiServiceMock, 'getAll').mockReturnValue(of(recipes));
    const name = 'unique name';

    const result = service.isNameUnique(name);

    expect(apiServiceMock.getAll).toBeCalledWith(true);
    result.subscribe((value) => expect(value).toBe(true));
  });

  test('should return false', () => {
    jest.spyOn(apiServiceMock, 'getAll').mockReturnValue(of(recipes));
    const name = recipes[0].name;

    const result = service.isNameUnique(name);

    expect(apiServiceMock.getAll).toBeCalledWith(true);
    result.subscribe((value) => expect(value).toBe(false));
  });
});

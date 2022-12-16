import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';
import { of } from 'rxjs';

import { RecipeDataService } from './recipe-data.service';

describe('RecipeDataService', () => {
  let service: RecipeDataService;
  let httpClientMock: any;
  const baseUrl = 'testurl';

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
    {
      _id: '2',
      description: 'desc-2',
      name: 'name-2',
      preparationTimeInMinutes: 10,
      ingredients: [{ _id: '3', name: 'ing 3 name', quantity: '25' }],
    },
  ];

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
      put: jest.fn(),
      post: jest.fn(),
      delete: jest.fn(),
    };

    service = new RecipeDataService(httpClientMock, baseUrl);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return all recipes', () => {
    jest.spyOn(httpClientMock, 'get').mockReturnValue(of(recipes));
    service.getAll().subscribe((result) => expect(result).toBe(recipes));
    expect(httpClientMock.get).toBeCalled();
    expect(httpClientMock.get).toBeCalledWith(baseUrl);
  });

  test('should return recipe by id', () => {
    const recipe = recipes[0];
    const id = recipe._id;

    jest.spyOn(httpClientMock, 'get').mockReturnValue(of(recipe));
    service.getById(id).subscribe((result) => expect(result).toBe(recipe));
    expect(httpClientMock.get).toBeCalled();
    expect(httpClientMock.get).toBeCalledWith(baseUrl + '/' + id);
  });

  test('should create recipe', () => {
    const payload: CreateUpdateRecipePayload = { ...recipes[0] };

    jest.spyOn(httpClientMock, 'post').mockReturnValue(of(void 0));
    service.create(payload);
    expect(httpClientMock.post).toBeCalled();
    expect(httpClientMock.post).toBeCalledWith(baseUrl, { ...payload });
  });

  test('should update recipe', () => {
    const id = recipes[0]._id;
    const payload = { ...recipes[0] };

    jest.spyOn(httpClientMock, 'put').mockReturnValue(of(void 0));
    service.update(id, payload);
    expect(httpClientMock.put).toBeCalled();
    expect(httpClientMock.put).toBeCalledWith(baseUrl + '/' + id, {
      ...payload,
    });
  });

  test('should delete recipe', () => {
    const id = recipes[0]._id;

    jest.spyOn(httpClientMock, 'delete').mockReturnValue(of(void 0));
    service.delete(id);
    expect(httpClientMock.delete).toBeCalled();
    expect(httpClientMock.delete).toBeCalledWith(baseUrl + '/' + id);
  });
});

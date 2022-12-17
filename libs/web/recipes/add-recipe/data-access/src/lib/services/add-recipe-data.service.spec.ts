import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { AddRecipeDataService } from './add-recipe-data.service';

describe('AddRecipeDataService', () => {
  let service: AddRecipeDataService;
  let apiServiceMock: any;

  const recipePayload: CreateUpdateRecipePayload = {
    description: 'desc',
    name: 'name',
    preparationTimeInMinutes: 50,
    ingredients: [{ _id: '1', name: 'name', quantity: '5' }],
  };

  beforeEach(() => {
    apiServiceMock = {
      create: jest.fn(),
    };

    service = new AddRecipeDataService(apiServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call service to create recipe', () => {
    jest.spyOn(apiServiceMock, 'create');

    service.createRecipe(recipePayload);

    expect(apiServiceMock.create).toBeCalledWith(recipePayload);
  });
});

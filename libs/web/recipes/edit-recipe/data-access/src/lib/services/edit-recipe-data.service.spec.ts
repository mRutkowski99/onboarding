import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { EditRecipeDataService } from './edit-recipe-data.service';

describe('EditRecipeDataService', () => {
  let service: EditRecipeDataService;
  let apiServiceMock: any;

  beforeEach(() => {
    apiServiceMock = {
      getById: jest.fn(),
      update: jest.fn(),
    };

    service = new EditRecipeDataService(apiServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call service to get recipe', () => {
    jest.spyOn(apiServiceMock, 'getById');
    const id = '1';

    service.getRecipeToEdit(id);

    expect(apiServiceMock.getById).toBeCalledWith(id);
  });

  test('should call service to update recipe', () => {
    jest.spyOn(apiServiceMock, 'update');
    const id = '1';
    const payload: CreateUpdateRecipePayload = {
      description: 'desc',
      name: 'name',
      preparationTimeInMinutes: 50,
      ingredients: [{ _id: '1', name: 'name', quantity: '5' }],
    };

    service.updateRecipe(id, payload);

    expect(apiServiceMock.update).toBeCalledWith(id, payload);
  });
});

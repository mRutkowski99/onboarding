import { RecipeDetailsDataService } from './recipe-details-data.service';

describe('RecipeDetailsDataService', () => {
  let service: RecipeDetailsDataService;
  let apiServiceMock: any;

  beforeEach(() => {
    apiServiceMock = {
      getById: jest.fn(),
      delete: jest.fn(),
    };

    service = new RecipeDetailsDataService(apiServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call service to get specific recipe', () => {
    jest.spyOn(apiServiceMock, 'getById');
    const id = '1';

    service.getRecipeDetails(id);

    expect(apiServiceMock.getById).toBeCalledWith(id);
  });

  test('should call service to delete recipe', () => {
    jest.spyOn(apiServiceMock, 'delete');
    const id = '1';

    service.deleteRecipe(id);

    expect(apiServiceMock.delete).toBeCalledWith(id);
  });
});

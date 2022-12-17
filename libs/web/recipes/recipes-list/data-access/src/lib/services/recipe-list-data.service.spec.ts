import { RecipeListDataService } from './recipe-list-data.service';

describe('RecipeListDataService', () => {
  let service: RecipeListDataService;
  let apiServiceMock: any;

  beforeEach(() => {
    apiServiceMock = {
      getAll: jest.fn(),
      delete: jest.fn(),
    };

    service = new RecipeListDataService(apiServiceMock);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should call service to get all recipes', () => {
    jest.spyOn(apiServiceMock, 'getAll');

    service.listAllRecipes();

    expect(apiServiceMock.getAll).toBeCalled();
  });

  test('should call service to delete recipe', () => {
    jest.spyOn(apiServiceMock, 'delete');
    const id = '1';

    service.deleteRecipe(id);

    expect(apiServiceMock.delete).toBeCalledWith(id);
  });
});

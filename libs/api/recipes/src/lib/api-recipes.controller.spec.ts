import { Test } from '@nestjs/testing';
import { ApiRecipesController } from './api-recipes.controller';
import { ApiRecipesService } from './api-recipes.service';

describe('ApiRecipesController', () => {
  let controller: ApiRecipesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRecipesService],
      controllers: [ApiRecipesController],
    }).compile();

    controller = module.get(ApiRecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});

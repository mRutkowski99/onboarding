import { Test } from '@nestjs/testing';
import { ApiRecipesService } from './api-recipes.service';

describe('ApiRecipesService', () => {
  let service: ApiRecipesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRecipesService],
    }).compile();

    service = module.get(ApiRecipesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});

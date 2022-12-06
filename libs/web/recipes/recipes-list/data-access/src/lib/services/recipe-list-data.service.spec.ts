import { TestBed } from '@angular/core/testing';

import { RecipeListDataService } from './recipe-list-data.service';

describe('RecipeListDataService', () => {
  let service: RecipeListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

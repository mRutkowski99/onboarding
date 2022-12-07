import { TestBed } from '@angular/core/testing';

import { RecipeDetailsDataService } from './recipe-details-data.service';

describe('RecipeDetailsDataService', () => {
  let service: RecipeDetailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeDetailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

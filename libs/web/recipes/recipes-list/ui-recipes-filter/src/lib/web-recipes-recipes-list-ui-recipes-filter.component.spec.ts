import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipesListUiRecipesFilterComponent } from './web-recipes-recipes-list-ui-recipes-filter.component';

describe('WebRecipesRecipesListUiRecipesFilterComponent', () => {
  let component: WebRecipesRecipesListUiRecipesFilterComponent;
  let fixture: ComponentFixture<WebRecipesRecipesListUiRecipesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipesListUiRecipesFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WebRecipesRecipesListUiRecipesFilterComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

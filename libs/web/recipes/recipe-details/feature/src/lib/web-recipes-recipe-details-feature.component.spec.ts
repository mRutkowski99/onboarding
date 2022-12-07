import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipeDetailsFeatureComponent } from './web-recipes-recipe-details-feature.component';

describe('WebRecipesRecipeDetailsFeatureComponent', () => {
  let component: WebRecipesRecipeDetailsFeatureComponent;
  let fixture: ComponentFixture<WebRecipesRecipeDetailsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipeDetailsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesRecipeDetailsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

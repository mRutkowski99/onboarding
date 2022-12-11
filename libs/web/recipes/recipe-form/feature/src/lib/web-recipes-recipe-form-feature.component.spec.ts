import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipeFormFeatureComponent } from './web-recipes-recipe-form-feature.component';

describe('WebRecipesRecipeFormFeatureComponent', () => {
  let component: WebRecipesRecipeFormFeatureComponent;
  let fixture: ComponentFixture<WebRecipesRecipeFormFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipeFormFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesRecipeFormFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

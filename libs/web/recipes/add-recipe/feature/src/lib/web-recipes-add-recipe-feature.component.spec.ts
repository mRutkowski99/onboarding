import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesAddRecipeFeatureComponent } from './web-recipes-add-recipe-feature.component';

describe('WebRecipesAddRecipeFeatureComponent', () => {
  let component: WebRecipesAddRecipeFeatureComponent;
  let fixture: ComponentFixture<WebRecipesAddRecipeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesAddRecipeFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesAddRecipeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

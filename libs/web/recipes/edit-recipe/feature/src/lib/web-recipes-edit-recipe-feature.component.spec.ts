import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesEditRecipeFeatureComponent } from './web-recipes-edit-recipe-feature.component';

describe('WebRecipesEditRecipeFeatureComponent', () => {
  let component: WebRecipesEditRecipeFeatureComponent;
  let fixture: ComponentFixture<WebRecipesEditRecipeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesEditRecipeFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesEditRecipeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

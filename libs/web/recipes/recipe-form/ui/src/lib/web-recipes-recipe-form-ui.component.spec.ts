import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipeFormUiComponent } from './web-recipes-recipe-form-ui.component';

describe('WebRecipesRecipeFormUiComponent', () => {
  let component: WebRecipesRecipeFormUiComponent;
  let fixture: ComponentFixture<WebRecipesRecipeFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipeFormUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesRecipeFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

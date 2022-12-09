import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipeFormUiAddEditIngredientDialogComponent } from './web-recipes-recipe-form-ui-add-edit-ingredient-dialog.component';

describe('WebRecipesRecipeFormUiAddEditIngredientDialogComponent', () => {
  let component: WebRecipesRecipeFormUiAddEditIngredientDialogComponent;
  let fixture: ComponentFixture<WebRecipesRecipeFormUiAddEditIngredientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipeFormUiAddEditIngredientDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WebRecipesRecipeFormUiAddEditIngredientDialogComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

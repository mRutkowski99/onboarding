/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PreparationTimePipe } from '@onboarding/shared/util-preparation-time-pipe';

import { SharedUiRecipeDetailsComponent } from './shared-ui-recipe-details.component';
import { UiRecipeDetails } from './ui-recipe-details.interface';

describe('SharedUiRecipeDetailsComponent', () => {
  let component: SharedUiRecipeDetailsComponent;
  let fixture: ComponentFixture<SharedUiRecipeDetailsComponent>;
  const recipe: UiRecipeDetails = {
    name: 'Name',
    description: 'Desc',
    preparationTimeInMinutes: 30,
    ingredients: [
      { name: 'Ing1 - name', quantity: 'Ing2 - qty' },
      { name: 'Ing1 - name', quantity: 'Ing2 - qty' },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiRecipeDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiRecipeDetailsComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display recipe details', () => {
    const spans = fixture.debugElement.queryAll(By.css('span'));
    const preparationTimePipe = new PreparationTimePipe();

    expect(
      [
        component.recipe!.name,
        component.recipe!.description,
        preparationTimePipe.transform(
          component.recipe!.preparationTimeInMinutes
        ),
      ].every((prop) =>
        spans
          .map((span) => (<HTMLSpanElement>span.nativeElement).textContent)
          .includes(prop)
      )
    ).toBe(true);
  });

  test('should display ingredients', () => {
    const ingredientListItems = fixture.debugElement.queryAll(
      By.css('.ingredient')
    );

    expect(ingredientListItems.length).toBe(
      component.recipe?.ingredients.length
    );

    const ingredientsProps = ingredientListItems
      .map((li) => li.queryAll(By.css('span')))
      .flat()
      .map((span) => (<HTMLSpanElement>span.nativeElement).textContent);

    expect(
      component.recipe?.ingredients
        .map((ing) => Object.values(ing))
        .flat()
        .every((prop) => ingredientsProps.includes(prop))
    );
  });
});

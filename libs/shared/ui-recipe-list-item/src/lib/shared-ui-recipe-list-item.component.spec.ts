import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiRecipeListItemComponent } from './shared-ui-recipe-list-item.component';
import { RecipeListItem } from './recipe-list-item.interface';
import { By } from '@angular/platform-browser';
import { MatCard } from '@angular/material/card';

describe('SharedUiRecipeListItemComponent', () => {
  let component: SharedUiRecipeListItemComponent;
  let fixture: ComponentFixture<SharedUiRecipeListItemComponent>;

  const recipe: RecipeListItem = {
    _id: '1',
    name: 'name',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiRecipeListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiRecipeListItemComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display recipe name', () => {
    const span = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(span.textContent).toContain(component.recipe?.name);
  });

  test('should be highlighted', () => {
    fixture.componentRef.setInput('isSelected', true);
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.directive(MatCard));

    expect(card.classes['highlight']).toBeTruthy();
  });

  test('should not be highlighted', () => {
    fixture.componentRef.setInput('isSelected', false);
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.directive(MatCard));

    expect(card.classes['highlight']).toBeFalsy();
  });
});

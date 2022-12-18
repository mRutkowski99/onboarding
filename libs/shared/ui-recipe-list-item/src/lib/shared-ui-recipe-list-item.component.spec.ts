import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiRecipeListItemComponent } from './shared-ui-recipe-list-item.component';
import { RecipeListItem } from './recipe-list-item.interface';
import { By } from '@angular/platform-browser';
import { MatCard, MatCardContent } from '@angular/material/card';

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

  test('should emit #selected event', () => {
    const card = fixture.debugElement.query(By.directive(MatCardContent));
    jest.spyOn(component.selected, 'emit');

    card.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.selected.emit).toBeCalledWith(component.recipe?._id);
  });

  test('should emit #edit event', () => {
    const button = fixture.debugElement.query(By.css('#editButton'));
    jest.spyOn(component.edit, 'emit');
    jest.spyOn(component.selected, 'emit');

    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.edit.emit).toBeCalledWith(component.recipe?._id);
    expect(component.selected.emit).not.toBeCalled();
  });

  test('should emit #delete event', () => {
    const button = fixture.debugElement.query(By.css('#deleteButton'));
    jest.spyOn(component.delete, 'emit');
    jest.spyOn(component.selected, 'emit');

    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.delete.emit).toBeCalledWith(component.recipe?._id);
    expect(component.selected.emit).not.toBeCalled();
  });
});

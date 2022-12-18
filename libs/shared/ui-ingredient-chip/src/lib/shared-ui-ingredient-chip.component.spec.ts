import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedUiIngredientChipComponent } from './shared-ui-ingredient-chip.component';
import { UiIngredientChip } from './ui-ingredient-chip.interface';

describe('SharedUiIngredientChipComponent', () => {
  let component: SharedUiIngredientChipComponent;
  let fixture: ComponentFixture<SharedUiIngredientChipComponent>;
  const ingredient: UiIngredientChip = {
    _id: '1',
    name: 'Name',
    quantity: 'Quantity',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiIngredientChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiIngredientChipComponent);
    component = fixture.componentInstance;
    component.ingredient = ingredient;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display ingredient name and quantity', () => {
    const span = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(span.textContent).toBe(
      `${ingredient.name} - ${ingredient.quantity}`
    );
  });

  test('should not have buttons disabled', () => {
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons.forEach((btn) => {
      expect(btn.properties['disabled']).toBe(false);
    });
  });

  test('should have buttons disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons.forEach((btn) => {
      expect(btn.properties['disabled']).toBe(true);
    });
  });

  test('should emit #delete', () => {
    const button = fixture.debugElement.query(By.css('.btn--delete'));
    jest.spyOn(component.delete, 'emit');

    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.delete.emit).toBeCalledWith(component.ingredient?._id);
  });

  test('should emit #edit', () => {
    const button = fixture.debugElement.query(By.css('.btn--edit'));
    jest.spyOn(component.edit, 'emit');

    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.edit.emit).toBeCalledWith(component.ingredient);
  });
});

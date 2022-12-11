import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiIngredientChipComponent } from './shared-ui-ingredient-chip.component';

describe('SharedUiIngredientChipComponent', () => {
  let component: SharedUiIngredientChipComponent;
  let fixture: ComponentFixture<SharedUiIngredientChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiIngredientChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiIngredientChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

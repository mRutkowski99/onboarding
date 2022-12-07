import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiRecipeDetailsComponent } from './shared-ui-recipe-details.component';

describe('SharedUiRecipeDetailsComponent', () => {
  let component: SharedUiRecipeDetailsComponent;
  let fixture: ComponentFixture<SharedUiRecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiRecipeDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

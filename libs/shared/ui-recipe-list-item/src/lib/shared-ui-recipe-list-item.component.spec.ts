import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiRecipeListItemComponent } from './shared-ui-recipe-list-item.component';

describe('SharedUiRecipeListItemComponent', () => {
  let component: SharedUiRecipeListItemComponent;
  let fixture: ComponentFixture<SharedUiRecipeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiRecipeListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiRecipeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

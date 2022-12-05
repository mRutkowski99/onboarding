import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesShellContainerComponent } from './recipes-shell-container.component';

describe('RecipesShellContainerComponent', () => {
  let component: RecipesShellContainerComponent;
  let fixture: ComponentFixture<RecipesShellContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesShellContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesUiNotSelectedComponent } from './web-recipes-ui-not-selected.component';

describe('WebRecipesUiNotSelectedComponent', () => {
  let component: WebRecipesUiNotSelectedComponent;
  let fixture: ComponentFixture<WebRecipesUiNotSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesUiNotSelectedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesUiNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

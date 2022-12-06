import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRecipesRecipesListFeatureComponent } from './web-recipes-recipes-list-feature.component';

describe('WebRecipesRecipesListFeatureComponent', () => {
  let component: WebRecipesRecipesListFeatureComponent;
  let fixture: ComponentFixture<WebRecipesRecipesListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebRecipesRecipesListFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesRecipesListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

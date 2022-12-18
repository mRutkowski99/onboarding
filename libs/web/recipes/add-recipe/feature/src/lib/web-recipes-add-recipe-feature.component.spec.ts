import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebRecipesAddRecipeFeatureComponent } from './web-recipes-add-recipe-feature.component';
import { of } from 'rxjs';
import { AddRecipeStoreFacade } from '@onboarding/web/recipes/add-recipe/data-access';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { By } from '@angular/platform-browser';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';

describe('WebRecipesAddRecipeFeatureComponent', () => {
  let component: WebRecipesAddRecipeFeatureComponent;
  let fixture: ComponentFixture<WebRecipesAddRecipeFeatureComponent>;
  let storeFacadeMock: any;
  let eventBusMock: any;

  beforeEach(async () => {
    storeFacadeMock = {
      resetState: jest.fn(),
      createRecipe: jest.fn(),
    };

    eventBusMock = {
      on: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        WebRecipesAddRecipeFeatureComponent,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: AddRecipeStoreFacade, useValue: storeFacadeMock },
        { provide: EventBusService, useValue: eventBusMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WebRecipesAddRecipeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should subscribe to event bus', () => {
    jest.spyOn(eventBusMock, 'on');

    expect(eventBusMock.on).toBeCalledWith(
      EventNameEnum.RecipeCreated,
      expect.anything()
    );
  });

  test('should change #dirty', () => {
    const value = true;

    fixture.debugElement
      .query(By.directive(WebRecipesRecipeFormFeatureComponent))
      .triggerEventHandler('dirty', value);
    fixture.detectChanges();

    expect(component.dirty).toBe(value);
  });

  test('should call service to create recipe', () => {
    const payload: CreateUpdateRecipePayload = {
      name: 'name',
      description: 'desc',
      preparationTimeInMinutes: 52,
      ingredients: [{ _id: '2', name: 'name', quantity: '5' }],
    };
    jest.spyOn(storeFacadeMock, 'createRecipe');

    fixture.debugElement
      .query(By.directive(WebRecipesRecipeFormFeatureComponent))
      .triggerEventHandler('save', payload);
    fixture.detectChanges();

    expect(storeFacadeMock.createRecipe).toBeCalledWith(payload);
  });

  test('should call service to reset state', () => {
    jest.spyOn(storeFacadeMock, 'resetState');

    component.ngOnDestroy();

    expect(storeFacadeMock.resetState).toBeCalled();
  });
});

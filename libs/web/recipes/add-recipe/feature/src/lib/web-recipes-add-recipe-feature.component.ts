import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import {
  AddRecipeStoreFacade,
  WebRecipesAddRecipeDataAccessModule,
} from '@onboarding/web/recipes/add-recipe/data-access';
import { FormContainerComponent } from '@onboarding/web/shared/util';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'onboarding-web-recipes-add-recipe-feature',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesAddRecipeDataAccessModule,
    WebRecipesRecipeFormFeatureComponent,
  ],
  templateUrl: './web-recipes-add-recipe-feature.component.html',
  styleUrls: ['./web-recipes-add-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesAddRecipeFeatureComponent
  implements FormContainerComponent, OnInit, OnDestroy
{
  constructor(
    private store: AddRecipeStoreFacade,
    private eventBus: EventBusService
  ) {}

  private formSubmittedEventSubscription: Subscription | undefined;
  formDisabled$ = this.store.formDisabled$;
  dirty = false;

  ngOnInit(): void {
    this.formSubmittedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeCreated,
      () => (this.dirty = false)
    );
  }

  ngOnDestroy(): void {
    this.formSubmittedEventSubscription?.unsubscribe();
    this.store.resetState();
  }

  onSaveRecipe(recipe: CreateUpdateRecipePayload) {
    this.store.createRecipe(recipe);
  }

  onDirtyChange(dirty: boolean) {
    this.dirty = dirty;
  }
}

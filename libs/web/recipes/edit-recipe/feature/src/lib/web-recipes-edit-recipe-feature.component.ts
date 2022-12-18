import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from '@onboarding/web/shared/util';
import { ActivatedRoute, Router } from '@angular/router';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import {
  EditRecipeStoreFacade,
  WebRecipesEditRecipeDataAccessModule,
} from '@onboarding/web/recipes/edit-recipe/data-access';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { Subscription } from 'rxjs';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { SharedUiLoadingComponent } from '@onboarding/shared/ui-loading';
import { SharedUiErrorComponent } from '@onboarding/shared/ui-error';

@Component({
  selector: 'onboarding-web-recipes-edit-recipe-feature',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesEditRecipeDataAccessModule,
    WebRecipesRecipeFormFeatureComponent,
    SharedUiLoadingComponent,
    SharedUiErrorComponent,
  ],
  templateUrl: './web-recipes-edit-recipe-feature.component.html',
  styleUrls: ['./web-recipes-edit-recipe-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesEditRecipeFeatureComponent
  implements FormContainerComponent, OnInit, OnDestroy
{
  constructor(
    private store: EditRecipeStoreFacade,
    private eventBus: EventBusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private recipeUpdatedEventSubscription: Subscription | undefined;
  private recipeDeletedEventSubscription: Subscription | undefined;

  vm$ = this.store.vm$;
  dirty = false;

  ngOnInit(): void {
    this.store.getRecipeToUpdate();

    this.recipeUpdatedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeUpdated,
      () => (this.dirty = false)
    );

    this.recipeDeletedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeDeleted,
      (id) => {
        if (id === this.route.snapshot.paramMap.get('id'))
          this.router.navigate(['']);
      }
    );
  }

  onReload() {
    this.store.getRecipeToUpdate();
  }

  onDirtyChange(dirty: boolean) {
    this.dirty = dirty;
  }

  onSave(recipe: CreateUpdateRecipePayload) {
    this.store.submitForm(recipe);
  }

  ngOnDestroy(): void {
    this.recipeDeletedEventSubscription?.unsubscribe();
    this.recipeUpdatedEventSubscription?.unsubscribe();
    this.store.resetState();
  }
}

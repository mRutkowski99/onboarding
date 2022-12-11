import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from '@onboarding/web/shared/util';
import { ActivatedRoute } from '@angular/router';
import { WebRecipesRecipeFormFeatureComponent } from '@onboarding/web/recipes/recipe-form/feature';
import {
  EditRecipeStoreFacade,
  WebRecipesEditRecipeDataAccessModule,
} from '@onboarding/web/recipes/edit-recipe/data-access';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { filter, map, Subscription } from 'rxjs';
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
    private route: ActivatedRoute,
    private store: EditRecipeStoreFacade,
    private eventBus: EventBusService
  ) {}

  private idSubscription: Subscription | undefined;
  private recipeUpdatedEventSubscription: Subscription | undefined;

  vm$ = this.store.vm$;
  dirty = false;

  ngOnInit(): void {
    this.initStore();
    this.recipeUpdatedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeUpdated,
      () => (this.dirty = false)
    );
  }

  onReload() {
    this.initStore();
  }

  onDirtyChange(dirty: boolean) {
    this.dirty = dirty;
  }

  onSave(recipe: CreateUpdateRecipePayload) {
    this.store.updateRecipe(
      <string>this.route.snapshot.paramMap.get('id'),
      recipe
    );
  }

  ngOnDestroy(): void {
    this.idSubscription?.unsubscribe();
    this.recipeUpdatedEventSubscription?.unsubscribe();
  }

  private initStore() {
    this.idSubscription = this.route.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        filter((id) => !!id)
      )
      .subscribe((id) => {
        this.store.getRecipeToUpdate(<string>id);
        this.dirty = false;
      });
  }
}

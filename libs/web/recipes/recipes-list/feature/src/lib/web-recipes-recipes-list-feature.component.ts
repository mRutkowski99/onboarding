import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Recipe } from '@onboarding/shared/domain';
import {
  RecipesListStoreFacade,
  WebRecipesRecipesListDataAccessModule,
} from '@onboarding/web/recipes/recipes-list/data-access';
import { MatButtonModule } from '@angular/material/button';
import { WebRecipesRecipesListUiRecipesFilterComponent } from '@onboarding/web/recipes/recipes-list/ui-recipes-filter';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import { SharedUiRecipeListItemComponent } from '@onboarding/shared/ui-recipe-list-item';
import { SharedUiLoadingComponent } from '@onboarding/shared/ui-loading';
import { SharedUiErrorComponent } from '@onboarding/shared/ui-error';
import {
  DialogService,
  UtilDialogServiceModule,
} from '@onboarding/web/shared/util-dialog-service';
import {
  EventBusService,
  EventNameEnum,
} from '@onboarding/web/shared/util-event-bus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'onboarding-feature-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipesListDataAccessModule,
    UtilDialogServiceModule,
    MatButtonModule,
    WebRecipesRecipesListUiRecipesFilterComponent,
    SharedUiRecipeListItemComponent,
    SharedUiLoadingComponent,
    SharedUiErrorComponent,
  ],
  templateUrl: './web-recipes-recipes-list-feature.component.html',
  styleUrls: ['./web-recipes-recipes-list-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipesListFeatureComponent
  implements OnInit, OnDestroy
{
  constructor(
    private store: RecipesListStoreFacade,
    private router: Router,
    private eventBus: EventBusService,
    private dialogService: DialogService
  ) {}

  private recipeDeletedEventSubscription: Subscription | undefined;

  vm$ = this.store.vm$;
  filter$ = this.store.filter$;

  ngOnInit() {
    this.store.getRecipesList();

    this.recipeDeletedEventSubscription = this.eventBus.on(
      EventNameEnum.RecipeDeleted,
      () => this.store.getRecipesList()
    );
  }

  onFilterChange(filter: string) {
    this.store.provideFilter(filter);
  }

  onFilterTypeChange(filterType: RecipesListFilterTypeEnum) {
    this.store.provideFilterType(filterType);
  }

  onAdd() {
    this.router.navigate(['add']);
  }

  onDelete(id: string) {
    this.dialogService
      .openGenericDialog('Are you sure you want to delete this recipe?', false)
      .subscribe((result) => {
        if (result) this.store.deleteRecipe(id);
      });
  }

  onEdit(id: string) {
    this.router.navigate(['edit', id]);
  }

  onSelected(id: string) {
    this.router.navigate([id]);
  }

  onReload() {
    this.store.getRecipesList();
  }

  trackFn(index: number, item: Recipe): Recipe {
    return item;
  }

  ngOnDestroy(): void {
    this.recipeDeletedEventSubscription?.unsubscribe();
  }
}

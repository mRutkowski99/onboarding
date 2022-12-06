import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

@Component({
  selector: 'onboarding-feature-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipesListDataAccessModule,
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
export class WebRecipesRecipesListFeatureComponent implements OnInit {
  constructor(private store: RecipesListStoreFacade, private router: Router) {}

  vm$ = this.store.vm$;
  filter$ = this.store.filter$;

  ngOnInit() {
    this.store.getRecipesList();
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
    console.log(id);
  }

  onEdit(id: string) {
    this.store.selectItem(id);
    this.router.navigate(['edit', id]);
  }

  onSelected(id: string) {
    this.store.selectItem(id);
    this.router.navigate([id]);
  }

  onReload() {
    this.store.getRecipesList();
  }
}

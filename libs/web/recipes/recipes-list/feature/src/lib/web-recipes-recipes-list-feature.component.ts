import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RecipesListStoreFacade,
  WebRecipesRecipesListDataAccessModule,
} from '@onboarding/web/recipes/recipes-list/data-access';
import { MatButtonModule } from '@angular/material/button';
import { WebRecipesRecipesListUiRecipesFilterComponent } from '@onboarding/web/recipes/recipes-list/ui-recipes-filter';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import { SharedUiRecipeListItemComponent } from '@onboarding/shared/ui-recipe-list-item';

@Component({
  selector: 'onboarding-feature-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipesListDataAccessModule,
    MatButtonModule,
    WebRecipesRecipesListUiRecipesFilterComponent,
    SharedUiRecipeListItemComponent,
  ],
  templateUrl: './web-recipes-recipes-list-feature.component.html',
  styleUrls: ['./web-recipes-recipes-list-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebRecipesRecipesListFeatureComponent implements OnInit {
  constructor(private store: RecipesListStoreFacade) {}

  vm$ = this.store.vm$;
  filter$ = this.store.filter$;

  ngOnInit() {
    this.store.getRecipesList();
  }

  onFilterChange(filter: string) {
    console.log(filter);
  }

  onFilterTypeChange(filterType: RecipesListFilterTypeEnum) {
    console.log(filterType);
  }

  onDelete(id: string) {
    console.log(id);
  }

  onEdit(id: string) {
    console.log(id);
  }

  onSelected(id: string) {
    console.log(id);
  }
}

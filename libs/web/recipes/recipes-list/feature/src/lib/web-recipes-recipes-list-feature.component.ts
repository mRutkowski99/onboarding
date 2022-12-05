import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RecipesListStoreFacade,
  WebRecipesRecipesListDataAccessModule,
} from '@onboarding/web/recipes/recipes-list/data-access';
import { WebRecipesRecipesListUiRecipesFilterComponent } from '@onboarding/web/recipes/recipes-list/ui-recipes-filter';
import { MatButtonModule } from '@angular/material/button';
import { RecipesListFilterTypeEnum } from '../../../util/src/lib/recipe-list-filter-type.enum';

@Component({
  selector: 'onboarding-feature-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    WebRecipesRecipesListDataAccessModule,
    MatButtonModule,
    WebRecipesRecipesListUiRecipesFilterComponent,
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
}

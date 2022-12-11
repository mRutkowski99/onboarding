import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';
import { WebRecipesRecipeDetailsFeatureComponent } from '@onboarding/web/recipes/recipe-details/feature';
import { WebRecipesAddRecipeFeatureComponent } from '@onboarding/web/recipes/add-recipe/feature';
import { WebRecipesEditRecipeFeatureComponent } from '@onboarding/web/recipes/edit-recipe/feature';
import {
  UnsubmittedFormGuard,
  UnsubmittedFormGuardModule,
} from '@onboarding/web/shared/util';

const routes: Routes = [
  {
    path: '',
    component: RecipesShellContainerComponent,
    children: [
      {
        path: 'add',
        pathMatch: 'full',
        component: WebRecipesAddRecipeFeatureComponent,
        canDeactivate: [UnsubmittedFormGuard],
      },
      {
        path: 'edit:id',
        pathMatch: 'full',
        component: WebRecipesEditRecipeFeatureComponent,
        canDeactivate: [UnsubmittedFormGuard],
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: WebRecipesRecipeDetailsFeatureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [UnsubmittedFormGuardModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRecipiesShellRoutingModule {}

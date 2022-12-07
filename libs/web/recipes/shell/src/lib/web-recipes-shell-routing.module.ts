import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';
import { WebRecipesRecipeDetailsFeatureComponent } from '@onboarding/web/recipes/recipe-details/feature';
import { WebRecipesAddRecipeFeatureComponent } from '@onboarding/web/recipes/add-recipe/feature';

const routes: Routes = [
  {
    path: '',
    component: RecipesShellContainerComponent,
    children: [
      {
        path: 'add',
        pathMatch: 'full',
        component: WebRecipesAddRecipeFeatureComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRecipiesShellRoutingModule {}

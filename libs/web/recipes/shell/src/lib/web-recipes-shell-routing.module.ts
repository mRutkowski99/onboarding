import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeResolver } from '@onboarding/shared/data-access';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';
import { WebRecipesRecipeDetailsFeatureComponent } from '@onboarding/web/recipes/recipe-details/feature';

const routes: Routes = [
  {
    path: '',
    component: RecipesShellContainerComponent,
    children: [
      {
        path: ':id',
        pathMatch: 'full',
        component: WebRecipesRecipeDetailsFeatureComponent,
        resolve: {
          recipe: RecipeResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRecipiesShellRoutingModule {}

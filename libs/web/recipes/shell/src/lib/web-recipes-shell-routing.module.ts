import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesShellContainerComponent,
    children: [{ path: ':id', pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRecipiesShellRoutingModule {}

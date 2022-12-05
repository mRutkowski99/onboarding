import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebShellContainerComponent } from './containers/web-shell-container/web-shell-container.component';

const routes: Routes = [
  {
    path: '',
    component: WebShellContainerComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@onboarding/web/recipes/shell')).WebRecipesShellModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebShellRoutingModule {}

import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const routerFeatureSelector =
  createFeatureSelector<RouterReducerState>('router');

/*
    Router state tree:
    root.firstChild => root of router (RouterModule.forRoot())
    => web shell router
    => recipes shell router
    => children routes in recipes router
*/

export const recipeIdSelector = createSelector(
  routerFeatureSelector,
  (state) =>
    state.state.root.firstChild?.firstChild?.firstChild?.firstChild?.params[
      'id'
    ]
);

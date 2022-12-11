import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';

const routerFeatureSelector =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const recipeIdSelector = createSelector(
  routerFeatureSelector,
  (router) => router.state.params['id']
);

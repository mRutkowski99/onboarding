import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDataService } from './recipe-data.service';
import { RecipeResolver } from './recipe.resolver';

const URL = 'https://crudcrud.com/api/b1f66252bcd745bcabb56b2e99f6da05/recipe';
export const API_URL = new InjectionToken<string>('Api base url');

const CACHE_EXPIRE_TIME_VALUE = 60;
export const CACHE_EXPIRE_TIME = new InjectionToken<number>(
  'Cache expire time in seconds'
);

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    RecipeDataService,
    RecipeResolver,
    { provide: API_URL, useValue: URL },
    { provide: CACHE_EXPIRE_TIME, useValue: CACHE_EXPIRE_TIME_VALUE },
  ],
})
export class SharedDataAccessModule {}

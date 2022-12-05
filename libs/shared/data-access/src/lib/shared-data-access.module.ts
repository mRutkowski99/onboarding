import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDataService } from './recipe-data.service';

const URL = 'https://crudcrud.com/api/b1f66252bcd745bcabb56b2e99f6da05/recipe';
export const API_URL = new InjectionToken<string>('Api base url');

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RecipeDataService, { provide: API_URL, useValue: URL }],
})
export class SharedDataAccessModule {}

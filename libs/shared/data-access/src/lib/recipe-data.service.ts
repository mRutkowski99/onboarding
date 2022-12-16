/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';
import { Observable, of, tap } from 'rxjs';
import { RecipesCache } from './cache/recipes.cache';
import { API_URL } from './shared-data-access.module';

@Injectable()
export class RecipeDataService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private url: string,
    private cache: RecipesCache
  ) {}

  getAll(omitCache = false): Observable<Recipe[]> {
    if (this.cache.hasValue && omitCache === false)
      return of(this.cache.get()!);

    return this.http
      .get<Recipe[]>(this.url)
      .pipe(tap((recipes) => this.cache.store(recipes)));
  }

  getById(id: string): Observable<Recipe> {
    return this.cache.hasSingleValue(id)
      ? of(this.cache.getSingle(id)!)
      : this.http.get<Recipe>(this.indexedResourceUrl(id));
  }

  create(payload: CreateUpdateRecipePayload): Observable<void> {
    return this.http.post<void>(this.url, { ...payload });
  }

  update(id: string, payload: CreateUpdateRecipePayload): Observable<void> {
    return this.http.put<void>(this.indexedResourceUrl(id), { ...payload });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.indexedResourceUrl(id));
  }

  private indexedResourceUrl(id: string): string {
    return this.url + '/' + id;
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  CreateRecipePayload,
  Recipe,
  UpdateRecipePayload,
} from '@onboarding/shared/domain';
import { Observable } from 'rxjs';
import { API_URL } from './shared-data-access.module';

@Injectable()
export class RecipeDataService {
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {}

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
  }

  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.indexedResourceUrl(id));
  }

  create(payload: CreateRecipePayload): Observable<void> {
    return this.http.post<void>(this.url, { ...payload });
  }

  update(id: string, payload: UpdateRecipePayload): Observable<void> {
    return this.http.put<void>(this.indexedResourceUrl(id), { ...payload });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.indexedResourceUrl(id));
  }

  private indexedResourceUrl(id: string): string {
    return this.url + '/' + id;
  }
}

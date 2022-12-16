import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CreateUpdateRecipePayload, Recipe } from '@onboarding/shared/domain';
import { Observable, of } from 'rxjs';
import { RecipesCache } from './cache/recipes.cache';
import { API_URL } from './shared-data-access.module';

@Injectable()
export class RecipeDataService {
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {}

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url);
    // return of(recipesMock);
  }

  getById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.indexedResourceUrl(id));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // return of(recipesMock.find((recipe) => recipe._id === id)!);
  }

  create(payload: CreateUpdateRecipePayload): Observable<void> {
    return this.http.post<void>(this.url, { ...payload });
    // recipesMock = [...recipesMock, { ...payload, _id: crypto.randomUUID() }];
    // return of(void 0);
  }

  update(id: string, payload: CreateUpdateRecipePayload): Observable<void> {
    return this.http.put<void>(this.indexedResourceUrl(id), { ...payload });

    // recipesMock = recipesMock.map((recipe) =>
    //   recipe._id === id ? { ...payload, _id: id } : recipe
    // );
    // return of(void 0);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.indexedResourceUrl(id));

    // recipesMock = recipesMock.filter((recipe) => recipe._id !== id);
    // return of(void 0);
  }

  private indexedResourceUrl(id: string): string {
    return this.url + '/' + id;
  }
}

// let recipesMock: Recipe[] = [
//   {
//     _id: '638e1815aaf0eb03e8f92efb',
//     name: 'Spicy Wings',
//     preparationTimeInMinutes: 30,
//     description: 'Chicken wings in sppicy Mexican style',
//     ingredients: [
//       {
//         _id: '1',
//         name: 'Chicken wings',
//         quantity: '500g',
//       },
//       {
//         _id: '2',
//         name: 'Pollos Hermanos chili spice',
//         quantity: '5g',
//       },
//       {
//         _id: '3',
//         name: 'Olive oil',
//         quantity: '10ml',
//       },
//     ],
//   },
//   {
//     _id: '638e1929aaf0eb03e8f92f04',
//     name: 'Pollos Burger',
//     preparationTimeInMinutes: 45,
//     description: 'Deliciuos burger with chicken',
//     ingredients: [
//       {
//         _id: '1',
//         name: 'Chicken nuggets base',
//         quantity: '300g',
//       },
//       {
//         _id: '2',
//         name: 'Bunn',
//         quantity: '250g',
//       },
//       {
//         _id: '3',
//         name: 'Ketchup',
//         quantity: '10g',
//       },
//       {
//         _id: '4',
//         name: 'Mayonnaise',
//         quantity: '10g',
//       },
//       {
//         _id: '5',
//         name: 'Lettuce',
//         quantity: '100g',
//       },
//       {
//         _id: '6',
//         name: 'Tomatoes',
//         quantity: '100g',
//       },
//     ],
//   },
// ];

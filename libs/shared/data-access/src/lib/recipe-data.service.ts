import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  CreateRecipePayload,
  Recipe,
  UpdateRecipePayload,
} from '@onboarding/shared/domain';
import { Observable, of } from 'rxjs';
import { API_URL } from './shared-data-access.module';

@Injectable()
export class RecipeDataService {
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {}

  getAll(): Observable<Recipe[]> {
    // return this.http.get<Recipe[]>(this.url);
    return of(recipesMock);
  }

  getById(id: string): Observable<Recipe> {
    // return this.http.get<Recipe>(this.indexedResourceUrl(id));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return of(recipesMock.find((recipe) => recipe._id === id)!);
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

const recipesMock = [
  {
    _id: '638e1815aaf0eb03e8f92efb',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1815aaf0eb03e8f92ef1',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1815aaf0eb03e8f92efc',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1815aaf0eb03e8f92efd',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1815aaf0eb03e8f92efe',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1815aaf0eb03e8f92eff',
    name: 'Spicy Wings',
    preparationTimeInMinutes: 30,
    description: 'Chicken wings in sppicy Mexican style',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken wings',
        quantity: '500g',
      },
      {
        _id: '2',
        name: 'Pollos Hermanos chili spice',
        quantity: '5g',
      },
      {
        _id: '3',
        name: 'Olive oil',
        quantity: '10ml',
      },
    ],
  },
  {
    _id: '638e1929aaf0eb03e8f92f04',
    name: 'Pollos Burger',
    preparationTimeInMinutes: 45,
    description: 'Deliciuos burger with chicken',
    ingredients: [
      {
        _id: '1',
        name: 'Chicken nuggets base',
        quantity: '300g',
      },
      {
        _id: '2',
        name: 'Bunn',
        quantity: '250g',
      },
      {
        _id: '3',
        name: 'Ketchup',
        quantity: '10g',
      },
      {
        _id: '4',
        name: 'Mayonnaise',
        quantity: '10g',
      },
      {
        _id: '5',
        name: 'Lettuce',
        quantity: '100g',
      },
      {
        _id: '6',
        name: 'Tomatoes',
        quantity: '100g',
      },
    ],
  },
];

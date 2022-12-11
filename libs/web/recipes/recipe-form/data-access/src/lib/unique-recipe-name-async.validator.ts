import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { UniqueRecipeNameService } from './services/uniqe-name.service';

export function createUniqueNameValidator(): AsyncValidatorFn {
  const dataAccess = inject(UniqueRecipeNameService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name) => dataAccess.isNameUnique(name)),
      map((result) => (result ? null : { notUniqueName: true }))
    );
  };
}

import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  shareReplay,
  startWith,
  tap,
  withLatestFrom,
} from 'rxjs';

export function isDirty(initialValue: Observable<object>) {
  return (valueChanges: Observable<object>): Observable<boolean> => {
    return valueChanges.pipe(
      debounceTime(200),
      withLatestFrom(initialValue),
      map(([value, initialValue]) =>
        Object.keys(value).some(
          (key) =>
            value[key as keyof object] !== initialValue[key as keyof object]
        )
      ),
      startWith(false),
      distinctUntilChanged()
    );
  };
}

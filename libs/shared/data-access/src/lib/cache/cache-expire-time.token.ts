import { InjectionToken } from '@angular/core';

const CACHE_EXPIRE_TIME_VALUE = 60;

export const CACHE_EXPIRE_TIME = new InjectionToken<number>(
  'Cache expire time in seconds',
  { providedIn: 'root', factory: () => CACHE_EXPIRE_TIME_VALUE }
);

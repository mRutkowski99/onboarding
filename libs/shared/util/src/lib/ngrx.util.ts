export type StoreStatus = 'loading' | 'error' | 'success';

export interface GenericState<T> {
  data: T | null;
  status: StoreStatus;
  error: string | null;
}

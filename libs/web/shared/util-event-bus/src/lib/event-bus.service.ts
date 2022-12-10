import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private subject = new Subject<Event>();

  on(eventName: EventNameEnum, action: (arg: unknown) => void): Subscription {
    return this.subject
      .pipe(
        filter((event) => event.name === eventName),
        map((event) => event.value)
      )
      .subscribe(action);
  }

  emit(event: Event) {
    this.subject.next(event);
  }
}

export class Event {
  constructor(public name: EventNameEnum, public value?: unknown) {}
}

export enum EventNameEnum {
  RecipeDeleted,
  RecipeCreated,
}

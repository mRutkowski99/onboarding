import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'preparationTimePipe' })
export class PreparationTimePipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes < 1)
      throw new Error('Preparation time must be at least 1 minute');

    const hours = Math.floor(minutes / 60);
    return (hours > 0 ? `${hours}h ` : '') + `${minutes % 60}m`;
  }
}

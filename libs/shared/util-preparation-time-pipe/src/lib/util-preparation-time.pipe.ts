import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'preparationTimePipe' })
export class PreparationTimePipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    return hours > 0 ? `${hours}h` : '' + ` ${minutes % 60}m`;
  }
}

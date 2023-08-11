import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(words: string): string {
    if (!words) return '';

    return words
      .split(/\s/g)
      .map((word: string) => word[0].toUpperCase() + word.slice(1) || '')
      .join(' ');
  }
}

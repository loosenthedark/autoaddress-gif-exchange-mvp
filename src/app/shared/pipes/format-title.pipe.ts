import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle',
  standalone: true,
})
export class FormatTitlePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' GIF ')[0];
  }
}

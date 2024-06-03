import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTagsFromSlug',
  standalone: true,
})
export class GetTagsFromSlugPipe implements PipeTransform {
  transform(value: string, param: string): string[] {
    return value.split(param).slice(0, value.split(param).length - 1);
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titleize'
})
export class TitleizePipe implements PipeTransform {

  transform(value: string) {
    let prepositions = [
      'of',
      'the'
    ];

    return value.toLowerCase().split(" ").map(
      function (word, index) {
        if (prepositions.includes(word) && index != 0)
          return word;
        else
          return word.charAt(0).toUpperCase() + word.substring(1);
      }
    ).join(" ");
  }
}

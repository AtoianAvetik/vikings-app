import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translation'
})
export class TranslationPipe implements PipeTransform {

    transform(code, items: any, property: any): any {
        for (let i = 0; i < items.length; i++) {
            if (items[i].language_id === code) {
                return items[i][property];
            } else {
                return null;
            }
        }
    }

}

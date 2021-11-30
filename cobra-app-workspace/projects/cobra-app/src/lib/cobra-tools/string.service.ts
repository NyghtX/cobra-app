import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() {
  }

  /**
    * Akzente in Zeichenketten ersetzen um diese zu dem entsprechenden 'regulären Buchstaben' sortieren zu können.
    */
  clearString(str: string) {
    if (!str)
      return '';
    return str.toLocaleLowerCase()
      .replace(/[áãàâäå]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íîï]/g, 'i')
      .replace(/[óõôö]/g, 'o')
      .replace(/[úüùû]/g, 'u')
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ş/g, 's').trim();
  }
}

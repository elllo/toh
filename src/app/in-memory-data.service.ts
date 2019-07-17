import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Lonk Skyrunner'},
      { id: 11, name: 'Honk Duo' },
      { id: 12, name: 'Dark Vather' },
      { id: 13, name: 'Palpalapap' },
      { id: 14, name: 'Leila Organspende' },
      { id: 15, name: 'Char Char Bits' },
      { id: 16, name: 'Anderkind Skyrunner' },
      { id: 17, name: 'Nimm-2-KO' },
      { id: 18, name: 'Y-Opa' },
      { id: 19, name: 'Face Bindu' },
      { id: 20, name: 'Obi-Markt Kleptomani' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}

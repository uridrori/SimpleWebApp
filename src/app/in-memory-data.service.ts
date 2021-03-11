import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const artists = [
      { id: 11, name: 'Mr Bungle', rating: 0 },
      { id: 12, name: 'Vanilla Ice', rating: 0 },
      { id: 13, name: 'Nick Cave', rating: 0 },
      { id: 14, name: 'Erikah Badu', rating: 0 },
      { id: 15, name: 'The Weeknd', rating: 0 },
      { id: 16, name: 'Jessie Ware', rating: 0 },
      { id: 17, name: 'LCD Soundsystem', rating: 0 },
      { id: 18, name: 'The Clash', rating: 0 },
      { id: 19, name: 'The Who', rating: 0 },
      { id: 20, name: 'AC/DC', rating: 0 }
    ];
    return { artists };
  }

  genId(artists: Artist[]): number {
    return artists.length > 0 ? Math.max(...artists.map(artist => artist.id)) + 1 : 11;
  }
}
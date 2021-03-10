import { ARTISTS } from './mock-artists';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    const artists = of(ARTISTS);
    return artists;
  }
}

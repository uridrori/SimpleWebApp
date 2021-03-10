import { MessageService } from './message.service';
import { ARTISTS } from './mock-artists';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  constructor(private messageService: MessageService) { }

  getArtists(): Observable<Artist[]> {
    const artists = of(ARTISTS);
    this.messageService.add('ArtistService: fetched artists')
    return artists;
  }
}

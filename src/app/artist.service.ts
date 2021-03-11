import { MessageService } from './message.service';
import { ARTISTS } from './mock-artists';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artistsUrl = 'api/artists';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
  }

  getArtist(id: number): Observable<Artist> {
    this.messageService.add(`ArtistService: fetched artist id=${id}`);
    return of(ARTISTS.find(artist => artist.id === id));
  }

  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }


}

import { MessageService } from './message.service';
import { ARTISTS } from './mock-artists';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private artistsUrl = 'api/artists';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
      .pipe(
        tap(_ => this.log('fetched artists')),
        catchError(this.handleError<Artist[]>('getArtists', []))
      );
  }

  getArtist(id: number): Observable<Artist> {
    const url = `${this.artistsUrl}/${id}`;
    return this.http.get<Artist>(url).pipe(
      tap(_ => this.log(`fetched artist id=${id}`)),
      catchError(this.handleError<Artist>(`getArtist id=${id}`))
    );
  }

  updateArtist(artist: Artist): Observable<any> {
    return this.http.put(this.artistsUrl, artist, this.httpOptions).pipe(
      tap(_ => this.log(`updated artist id=${artist.id}`)),
      catchError(this.handleError<any>('updateArtist'))
    );
  }


  addArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.artistsUrl, artist, this.httpOptions).pipe(
      tap((newArtist: Artist) => this.log(`added artist w/ id=${newArtist.id}`)),
      catchError(this.handleError<Artist>('addArtist'))
    );
  }


  deleteArtist(artist: Artist | number): Observable<Artist> {
    const id = typeof artist === 'number' ? artist : artist.id;
    const url = `${this.artistsUrl}/${id}`;

    return this.http.delete<Artist>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted artist id=${id}`)),
      catchError(this.handleError<Artist>('deleteArtist'))
    );
  }

  searchArtists(term: string): Observable<Artist[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Artist[]>(`${this.artistsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found artists matching "${term}"`) :
        this.log(`no artists matching "${term}"`)),
      catchError(this.handleError<Artist[]>('searchArtists', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`ArtistService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }




}

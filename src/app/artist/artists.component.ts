import { ArtistService } from './../artist.service';
import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  selectedArtist?: Artist;

  constructor(private artistService: ArtistService) {
  }

  getArtists(): void {
    this.artistService.getArtists()
        .subscribe(artists => this.artists = artists);
  }

  ngOnInit(): void {
    this.getArtists();

  }
  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

}

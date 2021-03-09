import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../mock-artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists = ARTISTS;
  selectedArtist?: Artist;

  constructor() {
  }

  ngOnInit(): void {

  }
  onSelect(artist: Artist): void {
    this.selectedArtist = artist;
  }

}

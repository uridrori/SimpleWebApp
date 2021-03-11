import { MessageService } from './../message.service';
import { ArtistService } from './../artist.service';
import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  constructor(private artistService: ArtistService) {
  }

  getArtists(): void {
    this.artistService.getArtists()
      .subscribe(artists => this.artists = artists);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.artistService.addArtist({ name } as Artist)
      .subscribe(artist => {
        this.artists.push(artist);
      });
  }

  delete(artist: Artist): void {
    this.artists = this.artists.filter(h => h !== artist);
    this.artistService.deleteArtist(artist).subscribe();
  }

  ngOnInit(): void {
    this.getArtists();

  }

}

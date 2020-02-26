import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any ={};
  loading:boolean;

  constructor(private router: ActivatedRoute, private spotify:SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params=>{
      //console.log(params['id']);
      this.getArtist(params['id']);
      
    })
  }

  ngOnInit(): void {
  }

  getArtist(id:string){
    this.loading = true;
   this.spotify.getArtist(id).subscribe(artist=>{
     console.log(artist);
     this.artist= artist;
     this.loading = false;
   });
  }
}

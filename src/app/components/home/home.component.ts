import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

   //newReleases:any[]=[];
   newReleases:any[]=[];
  constructor(private spotify: SpotifyService) { 
     this.spotify.getNewReleases().subscribe((data:any)=>{
       console.log(data.albums.items);
       this.newReleases = data.albums.items;
       //console.log(this.newReleases);
       //this.newReleases = data.album.items;
       //console.log(this.newReleases);
     });
    }
  ngOnInit(): void {
  }

}

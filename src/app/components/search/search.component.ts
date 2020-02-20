import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }
  
  artists:any[]=[];
  search(term:string){
    this.spotify.getArtist(term).subscribe((data:any)=>{
      console.log(data);
      this.artists=data;
      
    });
  }
}

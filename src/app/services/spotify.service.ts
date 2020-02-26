import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
  }

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCcezVlERIgRonclYNzV3-Jx2bRFryvx162iPrf9-cy9YGSHeoB9_Rd7zqCJ1ZkQ6k0fzD49jfmQqbyUJk'
    })
    
    return this.http.get(url,{headers});
  }
  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
                    .pipe(map(data=>{
                      return data['albums'].items;
                    }));
    
  }

  getArtists(term:string){

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
                  .pipe(map(data=> data['artists'].items));
                  //when a function arrow has an only line of code and is a return,
                  //it can change like that,see the difference with the function above
                  //it remove : {} and the return word.
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }
}

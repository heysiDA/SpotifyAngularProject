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
      'Authorization':'Bearer BQAjDXWTy1nmaHnlT4hdDLonYGdp8-Xo06jiPFFM5p3fDyHSagX6GcrBFplVFi96vxlb9ilcqLOdjrbm5aY'
    })
    
    return this.http.get(url,{headers});
  }
  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
                    .pipe(map(data=>{
                      return data['albums'].items;
                    }));
    
  }

  getArtist(term:string){

    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
                  .pipe(map(data=> data['artists'].items));
                  //when a function arrow has an only line of code and is a return,
                  //can change like that,see the difference with the function above
                  //remove {}, and the return word.
  }
}

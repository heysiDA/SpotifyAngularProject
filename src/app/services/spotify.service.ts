import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
  }

  getNewReleases(){
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAjO_Dnp24a9dF6Vs1an2mkGeFHCWp8bjGTgOIgG-pMJ-UG0fubhDqxtKrTh-BYBiIX5FsT2RxcVZPlQY0'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
    
  }
}

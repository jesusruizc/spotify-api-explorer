import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TopTracks } from 'src/app/interfaces/top-tracks';
// import { URLSearchParams } from 'url';
import { LoggedInModule } from '../../components/logged-in/logged-in.module';
import { Token } from '../../interfaces/token';
import { AuthenticatorService } from '../authenticator/authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class DataRequesterService {
  BASE_URL = 'https://api.spotify.com/v1'

  constructor(
    private readonly http: HttpClient,
    private readonly auth: AuthenticatorService
  ){
  }

  getTopTracks(){
    return this.http.get<TopTracks>(
      `${this.BASE_URL}/me/top/tracks`,
      {
        headers:{
          "Authorization": "Bearer " + this.auth.returnToken()
        },
        params:{
          "limit": 10,
          "time_range": "short_term"
        },
        observe: 'body'
      }
      )
}
}
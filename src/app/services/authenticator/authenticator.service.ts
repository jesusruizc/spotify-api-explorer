import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Token } from 'src/app/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  CLIENT_ID = '1b270c01794d474aa560435e819deda2';
  CLIENT_SECRET = 'a9a9150cb78741f090000fa39f9b9b9f'
  ACCOUNTS_URI = 'https://accounts.spotify.com';
  CODE_VERIFIER = 'hPBGhMp6kZ.mHxMPJCRTmHM936Wh8qt3V3qM7om0qViOZ.DbYxeW5cSfernQfZZj0c9dDqy.jJGQgRJwJ0ET-RTjMiNhQtjWefpcaRZtxZbuUl4zk3Hq8A1NIfln8La-';
  CODE_CHALLENGE = '6_F_fMLqBeW4w0wedyrDxAli8k4hhBD4abQDRV-2pCM'

  token= new BehaviorSubject<string>('');
  token$ = this.token.asObservable();

  constructor(
    private readonly http: HttpClient
  ) { }

  logIn(){ 
    let query = new URLSearchParams({
      "client_id": this.CLIENT_ID,
      "response_type": "code",
      "redirect_uri": "http://localhost:4200/create",
      "scope":"user-read-recently-played user-top-read",
      "show_dialog": "true",
      "code_challenge_method": "S256",
      "code_challenge": this.CODE_CHALLENGE
    })
    let url =  `${this.ACCOUNTS_URI}/authorize?` + query.toString();
    // url += `client_id=${this.CLIENT_ID}`;
    // url += `&response_type=code`;
    // url += `&redirect_uri=http://localhost:4200/create`;
    // url += '&scope=user-read-recently-played user-top-read';
    // url += '&show_dialog=true';
          // code_challenge_method: 'S256'
        
    window.location.href = url;
  }

  getToken(code: string){
    let query = new URLSearchParams({
    'grant_type':'authorization_code',
    'code': code,
    'redirect_uri':'http://localhost:4200/create',
    'client_id': this.CLIENT_ID,
    'code_verifier': this.CODE_VERIFIER
    })
    this.http.post<Token>(
      `${this.ACCOUNTS_URI}/api/token`,
      query.toString(),
    {
      headers: {
        "Authorization": 'Basic ' + btoa(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`),
        "Content-Type": 'application/x-www-form-urlencoded'
      }, 
      observe: 'body'
    },
    
    ).subscribe(response=>this.token.next(response['access_token']));
  }

  returnToken(){
    return this.token.getValue();
  }
}

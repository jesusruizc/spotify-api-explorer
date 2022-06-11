import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';
import { DataRequesterService } from 'src/app/services/data-requester/data-requester.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    private readonly auth: AuthenticatorService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logIn(){
    this.auth.logIn()
  }
  

}

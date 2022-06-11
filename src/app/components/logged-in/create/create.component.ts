import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/services/authenticator/authenticator.service';
import { DataRequesterService } from 'src/app/services/data-requester/data-requester.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  code!: string;
  topTracks: Array<any> = [];


  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthenticatorService,
    private readonly data: DataRequesterService
  ) { }

  ngOnInit(): void {
   if(typeof this.route.snapshot.queryParamMap.get('code') === "string"){
    this.code = this.route.snapshot.queryParamMap.get('code') as string;
    this.auth.getToken(this.code);
   }
   else{
    this.router.navigate([''])
   }
  }

  showTopTracks(){
    this.data.getTopTracks().subscribe(response=>this.topTracks = response['items'])
  }
}

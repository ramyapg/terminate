import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCalculator';
  isAuthenticated = true;
  

  constructor(public oktaAuth: OktaAuthService) {
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit(): Promise<void> {
    // get authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

 

  async logout() {
    
    await this.oktaAuth.signOut();

  }

  
}
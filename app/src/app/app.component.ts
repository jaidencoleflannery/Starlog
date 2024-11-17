import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ThemeService } from './services/theme.service';
import { UserAuthService } from './services/user-auth.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Starlog';
  constructor(
    private themeService: ThemeService, 
    private userAuthService: UserAuthService, 
    private router: Router, 
    public auth: AuthService,) {}

  userInfo: any;

  ngOnInit() {
    this.userAuthService.getUser().subscribe(user => {
      if (!user) {
        this.auth.loginWithRedirect();
      }
    });

    this.themeService.verifyTheme();
  }
}
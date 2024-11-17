import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  origin: string;

  constructor(
    private themeService: ThemeService, 
    public auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.origin = this.document.location.origin;
  }
  
  changeTheme(){
      this.themeService.themeToggle();
  }
  
}
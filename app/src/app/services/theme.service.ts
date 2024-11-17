import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {}

  theme: string = localStorage.getItem('theme') || 'null';
  
  themeToggle() {
    if (this.theme == 'dark') {
      this.theme = 'light';
      document.documentElement.style.setProperty('--bg-color', 'white');
      document.documentElement.style.setProperty('--primary-color', 'rgb(222, 222, 222)');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty('--highlight-color', 'black');
    } else {
      this.theme = 'dark';
      document.documentElement.style.setProperty('--bg-color', 'rgb(24, 24, 24)');
      document.documentElement.style.setProperty('--primary-color', 'rgb(38, 38, 38)');
      document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(221, 255, 0)');
    }
  
    localStorage.setItem('theme', this.theme);
  }

  verifyTheme() {
    if (this.theme == 'light') {
      this.theme = 'light';
      document.documentElement.style.setProperty('--bg-color', 'white');
      document.documentElement.style.setProperty('--primary-color', 'rgb(222, 222, 222)');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty('--highlight-color', 'black');
    } else {
      this.theme = 'dark';
      document.documentElement.style.setProperty('--bg-color', 'rgb(24, 24, 24)');
      document.documentElement.style.setProperty('--primary-color', 'rgb(38, 38, 38)');
      document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--highlight-color', 'rgb(221, 255, 0)');
    }
  
    localStorage.setItem('theme', this.theme);
  }
}

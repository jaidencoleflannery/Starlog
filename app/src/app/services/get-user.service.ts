import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor() { }

  async getData() {
    try {
      const response = await fetch('http://localhost:3000/get-data');
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching data');
      return null;
    }
  }
}

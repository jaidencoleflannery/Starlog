import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor() { }

  getData() {
    try {
      const userData = fetch('http://localhost:3000/get-data');
      return userData;
    } catch (error) {
      console.error('Error fetching data:');
      return null;
    }
  }
}

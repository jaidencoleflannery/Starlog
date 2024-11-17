import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth: AuthService) {}

  getUser() {
    return this.auth.isAuthenticated$.pipe(
      switchMap(isAuthenticated => {
        if (isAuthenticated) {
          return this.auth.user$;
        } else {
          return of(null);
        }
      })
    );
  }
}
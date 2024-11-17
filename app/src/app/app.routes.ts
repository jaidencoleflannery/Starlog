import { Routes } from '@angular/router';
import { catchAllRoute, ClerkAuthGuardService } from 'ngx-clerk';

import { SignInComponent } from './sign-in/sign-in.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { 
        matcher: catchAllRoute('sign-in'), 
        component: SignInComponent, 
        canActivate: [ClerkAuthGuardService] 
    },
    { 
        matcher: catchAllRoute('home'), 
        component: AppComponent, 
        canActivate: [ClerkAuthGuardService] 
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', 
        redirectTo: '/home',
        pathMatch: 'full' 
    }
  ];
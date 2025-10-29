import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Welcome',
        pathMatch:'full'
    },
    {
        path:'Welcome',
        loadComponent: () => import ('./pages/landing-page/landing-page.component').then(page => page.LandingPageComponent),
        title: 'Renato Presoto Portfolio',
    },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GradesComponent } from './grades/grades.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'VGK - Development & Design'
    },
    {
        path: 'aboutme',
        component: AboutComponent,
        title: 'VGK - About Me'
    },
    {
        path: 'grades',
        component: GradesComponent,
        title: 'VGK - Grades'
    }
];

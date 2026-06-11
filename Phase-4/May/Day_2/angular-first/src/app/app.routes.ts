import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Help } from './pages/help/help';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component:  About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'help',
        component: Help
    },
    {
        path : '**', // 404 page Match everything that doesn't exist
        component : NotFound 
    }

];

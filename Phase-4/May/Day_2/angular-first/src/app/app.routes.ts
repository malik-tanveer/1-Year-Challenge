import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Help } from './pages/help/help';

export const routes: Routes = [
    {
        path: '',
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
    }

];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuiSommeNousComponent } from './qui-somme-nous/qui-somme-nous.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'qui-sommes-nous', component: QuiSommeNousComponent },
    // { path: '**', component: NotFoundComponent }
];

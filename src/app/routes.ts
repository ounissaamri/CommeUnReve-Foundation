import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { QuiSommeNousComponent } from "./pages/qui-somme-nous/qui-somme-nous.component";
import {NosactionsComponent} from "./pages/nosactions/nosactions.component";
import {AgirAvecNousComponent} from "./pages/agir-avec-nous/agir-avec-nous.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'qui-sommes-nous', component: QuiSommeNousComponent },

    // { path: '**', component: NotFoundComponent }
    { path: 'nosactions', component: NosactionsComponent },
    { path: 'agiravecnous', component: AgirAvecNousComponent},
];

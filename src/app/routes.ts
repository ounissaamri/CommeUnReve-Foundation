import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { QuiSommeNousComponent } from "./pages/qui-somme-nous/qui-somme-nous.component";
import {NosactionsComponent} from "./pages/nosactions/nosactions.component";
import {AgirAvecNousComponent} from "./pages/agir-avec-nous/agir-avec-nous.component";
import { ArticleBlogComponent } from "./pages/article-blog/article-blog.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'qui-sommes-nous', component: QuiSommeNousComponent },

    // { path: '**', component: NotFoundComponent }
    { path: 'nos-actions', component: NosactionsComponent },
    { path: 'agir-avec-nous', component: AgirAvecNousComponent},
    { path: 'articles-blog', component: ArticleBlogComponent},
];

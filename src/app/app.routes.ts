import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuiSommeNousComponent } from './pages/qui-somme-nous/qui-somme-nous.component';
import { ArticleBlogComponent } from './pages/article-blog/article-blog.component';
import { DonationComponent } from './pages/donation/donation.component';
import { MentionslegalesComponent } from './pages/mentionslegales/mentionslegales.component';
import { PolitiqueDeConfidentialiteComponent } from './pages/politique-de-confidentialite/politique-de-confidentialite.component';
import { BenevoleComponent } from './pages/benevole/benevole.component';
import { PartenaireComponent } from './pages/partenaire/partenaire.component';
import { ChoicePartenaireComponent } from './pages/choice-partenaire/choice-partenaire.component';
import { AgirAvecNousComponent } from './pages/agir-avec-nous/agir-avec-nous.component';
import { NosactionsComponent } from './pages/nosactions/nosactions.component';
import { CompleteCheckoutComponent } from './pages/complete-checkout/complete-checkout.component';
import { CancelCheckoutComponent } from './pages/cancel-checkout/cancel-checkout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // lazy loading with loadComponent()
    { path: 'qui-sommes-nous', loadComponent: ()=> QuiSommeNousComponent },
    {path:'cancel',loadComponent: ()=> CancelCheckoutComponent},
    { path: 'choice-partenaire', loadComponent: ()=> ChoicePartenaireComponent},
    { path: 'partenaire', loadComponent: ()=> PartenaireComponent},
    { path: 'nos-actions',  loadComponent: ()=> NosactionsComponent },
    { path: 'agir-avec-nous',  loadComponent: ()=> AgirAvecNousComponent},
    { path: 'articles-blog/:id',  loadComponent: ()=> ArticleBlogComponent},
    { path: 'donation-forms',  loadComponent: ()=> DonationComponent},
    { path: 'mentions-legales',  loadComponent: ()=> MentionslegalesComponent},
    { path: 'Politique-De-Confidentialite',  loadComponent: ()=> PolitiqueDeConfidentialiteComponent},
    { path: 'devenir-benevole',  loadComponent: ()=> BenevoleComponent },
    {path:'complete',  loadComponent: ()=> CompleteCheckoutComponent},
    { path: '**', component: NotFoundComponent }
];


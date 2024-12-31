import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuiSommeNousComponent } from './pages/qui-somme-nous/qui-somme-nous.component';
import { NosactionsComponent } from './pages/nosactions/nosactions.component';
import { AgirAvecNousComponent } from './pages/agir-avec-nous/agir-avec-nous.component';
import { ArticleBlogComponent } from './pages/article-blog/article-blog.component';
import { DonationComponent } from './pages/donation/donation.component';
import { MentionslegalesComponent } from './pages/mentionslegales/mentionslegales.component';
import { PolitiqueDeConfidentialiteComponent } from './pages/politique-de-confidentialite/politique-de-confidentialite.component';
import { BenevoleComponent } from './pages/benevole/benevole.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qui-sommes-nous', component: QuiSommeNousComponent },

  // { path: '**', component: NotFoundComponent }
  { path: 'nos-actions', component: NosactionsComponent },
  { path: 'agir-avec-nous', component: AgirAvecNousComponent },
  { path: 'articles-blog', component: ArticleBlogComponent },
  { path: 'donation-forms', component: DonationComponent },
  { path: 'mentions-legales', component: MentionslegalesComponent },
  { path: 'Politique-De-Confidentialite', component: PolitiqueDeConfidentialiteComponent },
  { path: 'devenir-benevole', component: BenevoleComponent },
];

import { Component, Input } from '@angular/core';
import { HerosectionComponent } from '../../shared/components/herosection/herosection.component';
import { DonationComponent } from '../../shared/components/donation/donation.component';

@Component({
  selector: 'app-nosactions ',
  standalone: true,
  imports: [
    HerosectionComponent,
    DonationComponent
  ],
  templateUrl: './nosactions.component.html',
  styleUrl: './nosactions.component.scss'
})
export class NosactionsComponent {
 titreParent = 'JE DEVIENS BÉNÉVOLE'
 textParent = 'Rejoignez notre communauté de bénévoles et faites une différence dans la vie des autres. Que vous ayez quelques heures par semaine ou par mois, chaque geste compte et contribue à améliorer notre société.' 
 buttonParent ='Devenir Bénévole'
 titreImage ='Nos Actions' 
 descriptionImage='Rejoignez notre communauté de bénévoles.'
}
 
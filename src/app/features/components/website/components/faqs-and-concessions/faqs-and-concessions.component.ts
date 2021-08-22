import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface CardItem {
  id: string;
  background: string;
  title: string;
  longText: string;
  navigatePage: string;
  clicked: boolean;
}

@Component({
  selector: 'app-faqs-and-concessions',
  templateUrl: './faqs-and-concessions.component.html',
  styleUrls: ['./faqs-and-concessions.component.scss']
})

export class FaqsAndConcessionsComponent implements OnInit {

  html: CardItem[] = [
    {
      id: 'insurance',
      background: 'bg-assicurazione',
      title: 'Assicurazione',
      longText: 'Per affrontare le eventuali difficoltà nel sostenere i costi di un percorso psicologico, ci sono aziende che offrono ai loro collaboratori polizze assicurative che prevedono forme di rimborso o di copertura di sedute psicologiche.',
      navigatePage: 'insurance',
      clicked: false
    },
    {
      id: 'faqs',
      background: 'bg-faqs',
      title: 'Faqs',
      longText: 'Hai qualche domanda? Ho preparato una lista con le domande che più frequentemente mi vengono chieste.',
      navigatePage: 'faqs',
      clicked: false
    },
    {
      id: 'pagamenti-detrazioni',
      background: 'bg-pagamenti-e-detrazioni',
      title: 'Pagamenti e detrazioni',
      longText: 'Le prestazioni psicologiche sono prestazioni sanitarie, per cui puoi usufruire di una detrazione fiscale pari al 19% della spesa sostenuta, pagando tramite sistemi tracciabili previsti dal D. Lgs. 2241/1997, quali pagamento con POS, bonifico bancario o postale.\n' +
        'Al momento accetto bonifico bancario o postale.',
      navigatePage: '',
      clicked: false
    }
  ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

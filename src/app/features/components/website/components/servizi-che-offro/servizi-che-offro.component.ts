import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavigationItem} from "../../../../../shared/interfaces";

@Component({
  selector: 'app-servizi-che-offro',
  templateUrl: './servizi-che-offro.component.html',
  styleUrls: ['./servizi-che-offro.component.scss']
})
export class ServiziCheOffroComponent implements OnInit {

  html: NavigationItem[] = [
    {
      id:'attivita-clinica',
      title: 'Attività clinica',
      background: 'bg-attivita-clinica',
      items: [
        {
          navigatePage: 'servizi-offerti/consulenza-psicologica',
          text: 'Consulenza psicologica e online'
        },
        {
          navigatePage: 'servizi-offerti/valutazione-psicodiagnostica',
          text: 'Valutazione psicodiagnostica'
        },
        {
          navigatePage: 'servizi-offerti/parent-training',
          text: 'Parent training'
        },
        {
          navigatePage: 'servizi-offerti/crescita-personale',
          text: 'Percorso psicologico di crescita personale'
        },
      ],
      clicked: false
    },
    {
      id:'attivita-forense',
      title: 'Attività forense',
      background: 'bg-attivita-forense',
      items: [
        {
          navigatePage: '',
          text: 'Colloqui di valutazione delle competenze genitoriali'
        },
        {
          navigatePage: '',
          text: 'Colloqui con minori'
        },
        {
          navigatePage: '',
          text: 'Valutazione psicodiagnostica'
        },
        {
          navigatePage: '',
          text: 'Stesura relazione'
        },
      ],
      clicked: false
    }
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

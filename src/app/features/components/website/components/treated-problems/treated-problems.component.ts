import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavigationItem} from "../../../../../shared/interfaces";

@Component({
  selector: 'app-treated-problems',
  templateUrl: './treated-problems.component.html',
  styleUrls: ['./treated-problems.component.scss']
})
export class TreatedProblemsComponent implements OnInit {

  html: NavigationItem[] = [
    {
      id:'dipendenze-comportamentali',
      title: 'Dipendenze comportamentali',
      background: 'bg-dipendenze-conportamentali',
      items: [
        { navigatePage: 'dipendenze-comportamentali/dipendenza-sessuale', text: 'Dipendenza sessuale'},
        { navigatePage: 'dipendenze-comportamentali/dipendenza-da-internet', text: 'Dipendenza da internet'},
        { navigatePage: '', text: 'Dipendenza da gioco d\'azzardo'},
      ],
      clicked: false
    },
    {
      id:'disturbi-del-comportamento-alimentare',
      title: 'Disturbi del comportamento alimentare',
      background: 'bg-disturbi-del-comportamento-alimentare',
      items: [
        { navigatePage: '', text: 'Anoressia'},
        { navigatePage: '', text: 'Bulimia'},
        { navigatePage: '', text: 'Binge-eating'},
        { navigatePage: 'disturbi-del-comportamento-alimentare', text: 'Maggiori informazioni'}
      ],
      clicked: false
    },
    {
      id:'dipendenza-da-sostanze',
      title: 'Dipendenza da sostanze',
      background: 'bg-dipendenza-da-sostanze',
      items: [
        { navigatePage: '', text: 'Alcol'},
        { navigatePage: '', text: 'Cocaina'},
        { navigatePage: '', text: 'Altre sostanze psicoattive'},
        { navigatePage: 'dipendenza-da-sostanze', text: 'Maggiori informazioni'}

      ],
      clicked: false
    },
    {
      id:'problemi-di-coppia',
      title: 'Problemi di coppia',
      background: 'bg-problemi-di-coppia',
      items: [
        { navigatePage: '', text: 'Conflitti di coppia'},
        { navigatePage: 'problemi-di-coppia/dipendenza-affettiva', text: 'Dipendenza affettiva'},
        { navigatePage: '', text: 'Violenza domestica'},
      ],
      clicked: false
    },
    {
      id:'adoloscenza-e-genitorialita',
      title: 'Adoloscenza e genitoralità',
      background: 'bg-adoloscenza-e-genitorialita',
      items: [
        { navigatePage: '', text: 'Hikkikomori'},
        { navigatePage: '', text: 'Cyber-bullismo'},
        { navigatePage: '', text: 'Sexting'},
        { navigatePage: 'adoloscenza-e-genitorialita', text: 'Maggiori informazioni'},
      ],
      clicked: false
    },
    {
      id:'consulenza-tecnica',
      title: 'Consulenza tecnica',
      background: 'bg-consulenza-tecnica',
      items: [
        { navigatePage: '', text: 'Separazione e divorzi'},
        { navigatePage: '', text: 'Affidamenti'},
        { navigatePage: '', text: 'Adozioni'},
      ],
      clicked: false
    },

  ]

  constructor(public router: Router,) { }

  ngOnInit(): void {
  }

}

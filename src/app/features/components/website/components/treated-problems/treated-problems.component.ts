import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-treated-problems',
  templateUrl: './treated-problems.component.html',
  styleUrls: ['./treated-problems.component.scss']
})
export class TreatedProblemsComponent implements OnInit {

  html = [
    {
      title: 'Dipendenze comportamentali',
      background: 'bg-dipendenze-conportamentali',
      items: [
        `<div class="custom-link" (click)="router.navigate(['servizi-offerti/valutazione-psicodiagnostica'])">Valutazione psicodiagnostica</div>`,
        `<div class="custom-link" (click)="router.navigate(['dipendenze-comportamentali/dipendenza-da-internet'])">Dipendenza da internet</div>`,
        `<ng-container>Dipendenza da gioco d'azzardo</ng-container>`
      ],
      clicked: false
    },
    {
      title: 'Disturbi del comportamento alimentare',
      background: 'bg-disturbi-del-comportamento-alimentare',

      items: [
        `<ng-container>Anoressia</ng-container>`,
        `<ng-container>Bulimia</ng-container>`,
        `<ng-container>Binge-eating</ng-container>`,
        `<div class="custom-link" (click)="router.navigate(['disturbi-del-comportamento-alimentare'])">Maggiori informazioni</div>`
      ],
      clicked: false
    },
    {
      title: 'Dipendenza da sostanze',
      background: 'bg-dipendenza-da-sostanze',
      items: [
        `<ng-container>Alcol</ng-container>`,
        `<ng-container>Cocaina</ng-container>`,
        `<ng-container>Altre sostanze psicoattive</ng-container>`,
        `<div class="custom-link" (click)="router.navigate(['dipendenza-da-sostanze'])">Maggiori informazioni</div>`

      ],
      clicked: false
    },
    {
      title: 'Problemi di coppia',
      background: 'bg-problemi-di-coppia',
      items: [
        `<ng-container>Conflitti di coppia</ng-container>`,
        `<div class="section-item">
          <div class="custom-link" (click)="router.navigate(['problemi-di-coppia/dipendenza-affettiva'])">Dipendenza affettiva</div>
        </div>`,
        `<ng-container>Violenza domestica</ng-container>`,
      ],
      clicked: false
    },
    {
      title: 'Adoloscenza e genitoralità',
      background: 'bg-adoloscenza-e-genitorialita',
      items: [
        `<ng-container>Hikkikomori</ng-container>`,
        `<ng-container>Cyber-bullismo</ng-container>`,
        `<ng-container>Sexting</ng-container>`,
        `<div class="custom-link" (click)="router.navigate(['adoloscenza-e-genitorialita'])">Maggiori informazioni</div>`
      ],
      clicked: false
    },
    {
      title: 'Consulenza tecnica',
      background: 'bg-consulenza-tecnica',
      items: [
        `<ng-container>Separazione e divorzi</ng-container>`,
        `<ng-container>Affidamenti</ng-container>`,
        `<ng-container>Adozioni</ng-container>`,
      ],
      clicked: false
    },

  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

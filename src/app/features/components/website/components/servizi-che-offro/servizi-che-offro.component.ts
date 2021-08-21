import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-servizi-che-offro',
  templateUrl: './servizi-che-offro.component.html',
  styleUrls: ['./servizi-che-offro.component.scss']
})
export class ServiziCheOffroComponent implements OnInit {

  html = [
    {
      title: 'Attività clinica',
      background: 'bg-attivita-clinica',
      items: [
        `<div class="custom-link" (click)="router.navigate(['servizi-offerti/consulenza-psicologica'])">Consulenza psicologica e online</div>`,
        `<div class="custom-link" (click)="router.navigate(['servizi-offerti/valutazione-psicodiagnostica'])">Valutazione psicodiagnostica</div>`,
        `<div class="custom-link" (click)="router.navigate(['servizi-offerti/parent-training'])">Parent training</div>`,
        ` <div class="custom-link" (click)="router.navigate(['servizi-offerti/crescita-personale'])">Percorso psicologico di crescita personale</div>`
      ],
      clicked: false
    },
    {
      title: 'Attività forense',
      background: 'bg-attivita-forense',
      items: [
        `<ng-container>Colloqui di valutazione delle competenze genitoriali</ng-container>`,
        `<ng-container>Colloqui con minori</ng-container>`,
        `<ng-container>Valutazione psicodiagnostica</ng-container>`,
        `<ng-container>Stesura relazione</ng-container>`
      ],
      clicked: false
    }
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

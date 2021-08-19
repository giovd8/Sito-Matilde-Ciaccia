import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/website/components/home/home.component';
import { WebsiteComponent } from './components/website/website.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { AboutMeComponent } from './components/website/components/about-me/about-me.component';
import { AboutMeInDeptComponent } from './components/website/components/about-me/components/about-me-in-dept/about-me-in-dept.component';
import { WhatIDoComponent } from './components/website/components/what-i-do/what-i-do.component';
import { FaqsAndConcessionsComponent } from './components/website/components/faqs-and-concessions/faqs-and-concessions.component';
import { ContactsComponent } from './components/website/components/contacts/contacts.component';
import { InsuranceComponent } from './components/website/components/faqs-and-concessions/components/insurance/insurance.component';
import { FaqsQuestionsComponent } from './components/website/components/faqs-and-concessions/components/faqs-questions/faqs-questions.component';
import { TreatedProblemsComponent } from './components/website/components/treated-problems/treated-problems.component';
import { DisturbiDelComportamentoAlimentareComponent } from './components/website/components/treated-problems/components/disturbi-del-comportamento-alimentare/disturbi-del-comportamento-alimentare.component';
import { DipendenzaDaSostanzeComponent } from './components/website/components/treated-problems/components/dipendenza-da-sostanze/dipendenza-da-sostanze.component';
import { AdolescenzaEGenitorialitaComponent } from './components/website/components/treated-problems/components/adolescenza-e-genitorialita/adolescenza-e-genitorialita.component';
import { DipendenzaSessualeComponent } from './components/website/components/treated-problems/components/dipendenza-sessuale/dipendenza-sessuale.component';
import { DipendenzaDaInternetComponent } from './components/website/components/treated-problems/components/dipendenza-da-internet/dipendenza-da-internet.component';
import { DipendenzaAffettivaComponent } from './components/website/components/treated-problems/components/dipendenza-affettiva/dipendenza-affettiva.component';

const routes: Routes = [
  {path: 'index', component: WebsiteComponent},
  {path: 'about-me', component: AboutMeInDeptComponent},
  {path: 'dipendenze-comportamentali/dipendenza-sessuale', component: DipendenzaSessualeComponent},
  {path: 'dipendenze-comportamentali/dipendenza-da-internet', component: DipendenzaDaInternetComponent},
  {path: 'disturbi-del-comportamento-alimentare', component: DisturbiDelComportamentoAlimentareComponent},
  {path: 'problemi-di-coppia/dipendenza-affettiva', component: DipendenzaAffettivaComponent},
  {path: 'dipendenza-da-sostanze', component: DipendenzaDaSostanzeComponent},
  {path: 'adoloscenza-e-genitorialita', component: AdolescenzaEGenitorialitaComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'faqs', component: FaqsQuestionsComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    AboutMeComponent,
    AboutMeInDeptComponent,
    WhatIDoComponent,
    FaqsAndConcessionsComponent,
    ContactsComponent,
    InsuranceComponent,
    FaqsQuestionsComponent,
    TreatedProblemsComponent,
    DisturbiDelComportamentoAlimentareComponent,
    DipendenzaDaSostanzeComponent,
    AdolescenzaEGenitorialitaComponent,
    DipendenzaSessualeComponent,
    DipendenzaDaInternetComponent,
    DipendenzaAffettivaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }

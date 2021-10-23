import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/website/components/home/home.component';
import {WebsiteComponent} from './components/website/website.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AboutMeComponent} from './components/website/components/about-me/about-me.component';
import {AboutMeInDeptComponent} from './components/website/components/about-me/components/about-me-in-dept/about-me-in-dept.component';
import {WhatIDoComponent} from './components/website/components/what-i-do/what-i-do.component';
import {FaqsAndConcessionsComponent} from './components/website/components/faqs-and-concessions/faqs-and-concessions.component';
import {ContactsComponent} from './components/website/components/contacts/contacts.component';
import {InsuranceComponent} from './components/website/components/faqs-and-concessions/components/insurance/insurance.component';
import {FaqsQuestionsComponent} from './components/website/components/faqs-and-concessions/components/faqs-questions/faqs-questions.component';
import {TreatedProblemsComponent} from './components/website/components/treated-problems/treated-problems.component';
import {DisturbiDelComportamentoAlimentareComponent} from './components/website/components/treated-problems/components/disturbi-del-comportamento-alimentare/disturbi-del-comportamento-alimentare.component';
import {DipendenzaDaSostanzeComponent} from './components/website/components/treated-problems/components/dipendenza-da-sostanze/dipendenza-da-sostanze.component';
import {AdolescenzaEGenitorialitaComponent} from './components/website/components/treated-problems/components/adolescenza-e-genitorialita/adolescenza-e-genitorialita.component';
import {DipendenzaSessualeComponent} from './components/website/components/treated-problems/components/dipendenza-sessuale/dipendenza-sessuale.component';
import {DipendenzaDaInternetComponent} from './components/website/components/treated-problems/components/dipendenza-da-internet/dipendenza-da-internet.component';
import {DipendenzaAffettivaComponent} from './components/website/components/treated-problems/components/dipendenza-affettiva/dipendenza-affettiva.component';
import {ServiziCheOffroComponent} from './components/website/components/servizi-che-offro/servizi-che-offro.component';
import {ConsulenzaPsicologicaEOnlineComponent} from './components/website/components/servizi-che-offro/components/consulenza-psicologica-e-online/consulenza-psicologica-e-online.component';
import {SostegnoPsicologicoComponent} from './components/website/components/servizi-che-offro/components/sostegno-psicologico/sostegno-psicologico.component';
import {ValutazionePsicodiagnosticaComponent} from './components/website/components/servizi-che-offro/components/valutazione-psicodiagnostica/valutazione-psicodiagnostica.component';
import {ParentTrainingComponent} from './components/website/components/servizi-che-offro/components/parent-training/parent-training.component';
import {PercorsoCrescitaPersonaleComponent} from './components/website/components/servizi-che-offro/components/percorso-crescita-personale/percorso-crescita-personale.component';
import {ArticlesComponent} from './components/website/components/articles/articles.component';
import {ArticleComponent} from "./components/website/components/articles/components/article/article.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'index', component: WebsiteComponent},
  {path: 'about-me/index', component: AboutMeInDeptComponent},
  {path: 'dipendenze-comportamentali/dipendenza-sessuale', component: DipendenzaSessualeComponent},
  {path: 'dipendenze-comportamentali/dipendenza-da-internet', component: DipendenzaDaInternetComponent},
  {path: 'disturbi-del-comportamento-alimentare', component: DisturbiDelComportamentoAlimentareComponent},
  {path: 'dipendenza-da-sostanze', component: DipendenzaDaSostanzeComponent},
  {path: 'problemi-di-coppia/dipendenza-affettiva', component: DipendenzaAffettivaComponent},
  {path: 'adoloscenza-e-genitorialita', component: AdolescenzaEGenitorialitaComponent},
  {path: 'servizi-offerti/consulenza-psicologica', component: ConsulenzaPsicologicaEOnlineComponent},
  {path: 'servizi-offerti/sostegno-psicologico', component: SostegnoPsicologicoComponent},
  {path: 'servizi-offerti/valutazione-psicodiagnostica', component: ValutazionePsicodiagnosticaComponent},
  {path: 'servizi-offerti/parent-training', component: ParentTrainingComponent},
  {path: 'servizi-offerti/crescita-personale', component: PercorsoCrescitaPersonaleComponent},
  {path: 'insurance', component: InsuranceComponent},
  {path: 'faqs', component: FaqsQuestionsComponent},
  {path: 'articles/:articleRoute', component: ArticleComponent},
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
    DipendenzaAffettivaComponent,
    ServiziCheOffroComponent,
    ConsulenzaPsicologicaEOnlineComponent,
    SostegnoPsicologicoComponent,
    ValutazionePsicodiagnosticaComponent,
    ParentTrainingComponent,
    PercorsoCrescitaPersonaleComponent,
    ArticleComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class FeaturesModule {
}

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

const routes: Routes = [
  {path: 'index', component: WebsiteComponent},
  {path: 'about-me', component: AboutMeInDeptComponent},
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
    TreatedProblemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }

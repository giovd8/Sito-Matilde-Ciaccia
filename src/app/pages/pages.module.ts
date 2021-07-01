import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/website/components/home/home.component';
import { WebsiteComponent } from './components/website/website.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { AboutMeComponent } from './components/website/components/about-me/about-me.component';
import { AboutMeInDeptComponent } from './components/website/components/about-me-in-dept/about-me-in-dept.component';
import { WhatIDoComponent } from './components/website/components/what-i-do/what-i-do.component';

const routes: Routes = [
  {path: 'index', component: WebsiteComponent},
  {path: 'about-me', component: AboutMeInDeptComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    AboutMeComponent,
    AboutMeInDeptComponent,
    WhatIDoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }

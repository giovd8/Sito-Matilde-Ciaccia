import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/website/components/home/home.component';
import { WebsiteComponent } from './components/website/website.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { AboutMeComponent } from './components/website/components/about-me/about-me.component';

const routes: Routes = [
  {path: 'index', component: WebsiteComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }

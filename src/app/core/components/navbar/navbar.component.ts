import { Component, OnInit } from '@angular/core';
import {SwitchThemeService} from '../../../shared/services/switch-theme.service';
import {Router} from "@angular/router";

type Routes = {
  name: string,
  url: string
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public goToIndex = '';

  public showMenu = false;

  public routes: Routes[] = [
    {
      name: 'Home',
      url: '#index'
    },
    {
      name: 'Chi sono',
      url: '#about-me'
    },
    {
      name: 'Problemi trattati',
      url: '#problemi-trattati'
    },
    {
      name: 'Agevolazioni & FAQs',
      url: '#faqs-concessions'
    },
    {
      name: 'Contatti',
      url: '#contacts'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public scroll(route: string): void {
    const currentRoute = this.router.url;
    if (!currentRoute.includes('index')) {
      this.router.navigate(['index']);
      setTimeout(() => {
        document.querySelector(route).scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
      }, 50);
    }
    else {
      document.querySelector(route).scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    }
  }


}


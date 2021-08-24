import { Component, OnInit } from '@angular/core';
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
      name: 'Servizi',
      url: '#servizi-offerti'
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
    // this.showMenu = false;
    const currentRoute = this.router.url;
    const menuButton = document.querySelector('#menu-button') as HTMLButtonElement;
    if (menuButton) {
      menuButton.click();
    }
    if (!currentRoute.includes('index')) {
      this.router.navigate(['index']);
      setTimeout(() => {
        document.querySelector(route)?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, 50);
    }
    else {
      document.querySelector(route)?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }


  refresh(): void {
    window.location.reload();
  }
}


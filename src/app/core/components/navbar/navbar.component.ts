import { Component, OnInit } from '@angular/core';
import {SwitchThemeService} from "../../../shared/services/switch-theme.service";

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
      name: 'Contatti',
      url: '#contacts'
    },
    {
      name: 'Agevolazioni & FAQs',
      url: '#faqs'
    }
  ];

  constructor(public switchThemeServices: SwitchThemeService) { }

  ngOnInit(): void {
  }

  public scroll(route: string): void {
    document.querySelector(route).scrollIntoView();
  }


}


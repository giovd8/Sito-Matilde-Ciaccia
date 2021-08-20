import {Component, OnDestroy, OnInit} from '@angular/core';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import {NavigationService} from "../../../core/services/navigation.service";


@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit, OnDestroy {

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
    if (this.navigationService.getNavigateId() !== ''){
      const element = document.querySelector(`#${this.navigationService.getNavigateId()}`);
      console.log(this.navigationService.getNavigateId());
      if (element) {
        element.scrollIntoView();
        // const offsetY = element.getBoundingClientRect().top;
        // window.scrollTo({top: offsetY});
      }
    }
  }

  ngOnDestroy(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'scroll';
    body.style.position = 'relative';
  }

}
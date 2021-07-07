import {Component, OnDestroy, OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
  }

  ngOnDestroy(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'scroll';
    body.style.position = 'relative';
  }

}

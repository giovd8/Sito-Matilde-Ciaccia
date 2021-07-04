import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
  }

}

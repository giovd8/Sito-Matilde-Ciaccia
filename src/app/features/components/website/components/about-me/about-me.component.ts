import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    // AOS.init();
  }

}

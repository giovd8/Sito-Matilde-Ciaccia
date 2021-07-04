import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-and-concessions',
  templateUrl: './faqs-and-concessions.component.html',
  styleUrls: ['./faqs-and-concessions.component.scss']
})
export class FaqsAndConcessionsComponent implements OnInit {

  faqsAndConcessions = [
    {
      icon: 'fas fa-hand-holding-medical',
      shortText: 'aaaaa',
      longText: 'aaaaaaaaaa',
      isClicked: false
    },
    {
      icon: 'fas fa-hand-holding-usd',
      shortText: 'aaaaa',
      longText: 'aaaaaaaaaa',
      isClicked: false
    },
    {
      icon: 'fas fa-question',
      shortText: 'aaaaa',
      longText: 'aaaaaaaaaa',
      isClicked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

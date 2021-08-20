import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-treated-problems',
  templateUrl: './treated-problems.component.html',
  styleUrls: ['./treated-problems.component.scss']
})
export class TreatedProblemsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-servizi-che-offro',
  templateUrl: './servizi-che-offro.component.html',
  styleUrls: ['./servizi-che-offro.component.scss']
})
export class ServiziCheOffroComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'app-came-back-button',
  templateUrl: './came-back-button.component.html',
  styleUrls: ['./came-back-button.component.scss']
})
export class CameBackButtonComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.setNavigateId(this.router.url.split('/')[1]);
  }

  comeBack(): void {
    this.router.navigate(['']);
  }

}

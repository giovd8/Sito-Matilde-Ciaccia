import { Component, OnInit } from '@angular/core';
import {SwitchThemeService} from '../../../../../shared/services/switch-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public switchThemeServices: SwitchThemeService) { }

  ngOnInit(): void {

  }

}

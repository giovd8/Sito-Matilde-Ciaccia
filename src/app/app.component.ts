import { Component } from '@angular/core';
import {SwitchThemeService} from "./shared/services/switch-theme.service";
import {ArticleService} from "./core/services/article.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matilde-Ciaccia';
  constructor(
    private switchThemeService: SwitchThemeService,
  ) {
  }

  ngOnInit(): void {
    this.switchThemeService.checkActivateTheme();
  }

}


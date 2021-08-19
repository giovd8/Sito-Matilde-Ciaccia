import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchThemeComponent} from './components/switch-theme/switch-theme.component';
import {SwitchThemeService} from './services/switch-theme.service';
import { CameBackButtonComponent } from './components/came-back-button/came-back-button.component';



@NgModule({
  declarations: [
    SwitchThemeComponent,
    CameBackButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchThemeComponent,
    CameBackButtonComponent
  ],
  providers: [
    SwitchThemeService
  ]
})
export class SharedModule { }

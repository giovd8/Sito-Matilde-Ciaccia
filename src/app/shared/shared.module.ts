import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchThemeComponent} from './components/switch-theme/switch-theme.component';
import {SwitchThemeService} from './services/switch-theme.service';



@NgModule({
  declarations: [
    SwitchThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchThemeComponent
  ],
  providers: [
    SwitchThemeService
  ]
})
export class SharedModule { }

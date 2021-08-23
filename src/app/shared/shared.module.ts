import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchThemeComponent} from './components/switch-theme/switch-theme.component';
import {SwitchThemeService} from './services/switch-theme.service';
import { CameBackButtonComponent } from './components/came-back-button/came-back-button.component';
import { DividerComponent } from './components/divider/divider.component';



@NgModule({
  declarations: [
    SwitchThemeComponent,
    CameBackButtonComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchThemeComponent,
    CameBackButtonComponent,
    DividerComponent
  ],
  providers: [
    SwitchThemeService
  ]
})
export class SharedModule { }

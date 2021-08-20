import { Component, OnInit } from '@angular/core';
import {SwitchThemeService} from '../../services/switch-theme.service';

// const switchToggle = document.querySelector('#switch-toggle');
const darkIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
const lightIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss'],
})
export class SwitchThemeComponent implements OnInit {

  switchToggle: HTMLDivElement | null = null;

  constructor(public themeService: SwitchThemeService) {
  }

  ngOnInit(): void {
    this.switchToggle = document.querySelector('#switch-toggle');
    this.themeService.checkActivateTheme();
    if (this.themeService.isDarkMode && this.switchToggle) {
      this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
      this.setDarkIcon();
    }
    else if (this.switchToggle) {
      this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
      this.setLightIcon();
    }
  }

  setDarkIcon(): void {
    setTimeout(() => {
      if (this.switchToggle) {
        this.switchToggle.innerHTML = darkIcon;
      }
    }, 250);
  }

  setLightIcon(): void {
    setTimeout(() => {
      if (this.switchToggle) {
        this.switchToggle.innerHTML = lightIcon;
      }
    }, 250);
  }

  public switchTheme(event: Event): void {
    event.stopPropagation(); // stop bubble propagation event from html components
    this.themeService.changeActivateTheme();
    if (this.themeService.isDarkMode && this.switchToggle) {
      this.switchToggle.classList.remove('bg-yellow-500', '-translate-x-2');
      this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
      this.setDarkIcon();
    }
    else if (this.switchToggle) {
      this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
      this.switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
      this.setLightIcon();
    }
  }
}

//
// import {ThemeService} from '../../../core/services/theme.service';
// import {Component, Input, OnInit} from '@angular/core';
//
// const darkIcon = `
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
// </svg>`;
// const lightIcon = `
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
// </svg>`;
//
// @Component({
//   selector: 'app-switch-theme-button',
//   templateUrl: './switch-theme-button.component.html',
//   styleUrls: ['./switch-theme-button.component.scss']
// })
// export class SwitchThemeButtonComponent implements OnInit {
//
//   switchToggle: HTMLDivElement | null;
//
//   @Input() isHomePage = false;
//
//   constructor(public themeService: ThemeService) {
//   }
//
//   ngOnInit(): void {
//     this.switchToggle = document.querySelector('#switch-toggle');
//     this.themeService.checkActivateTheme();
//     if (this.themeService.isDarkMode && this.switchToggle) {
//       this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
//       this.setDarkIcon();
//     }
//     else if (this.switchToggle) {
//       this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
//       this.setLightIcon();
//     }
//   }
//
//   setDarkIcon(): void {
//     setTimeout(() => {
//       if (this.switchToggle) {
//         this.switchToggle.innerHTML = darkIcon;
//       }
//     }, 250);
//   }
//
//   setLightIcon(): void {
//     setTimeout(() => {
//       if (this.switchToggle) {
//         this.switchToggle.innerHTML = lightIcon;
//       }
//     }, 250);
//   }
//
//   public switchTheme(event: Event): void {
//     event.stopPropagation(); // stop bubble propagation event from html components
//     this.themeService.changeActivateTheme();
//     if (this.themeService.isDarkMode && this.switchToggle) {
//       this.switchToggle.classList.remove('bg-yellow-500', '-translate-x-2');
//       this.switchToggle.classList.add('bg-gray-700', 'translate-x-full');
//       this.setDarkIcon();
//     }
//     else if (this.switchToggle) {
//       this.switchToggle.classList.add('bg-yellow-500', '-translate-x-2');
//       this.switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
//       this.setLightIcon();
//     }
//   }
//
// }
//
//
//

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  isSmallScreen: boolean = window.innerWidth < 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

}

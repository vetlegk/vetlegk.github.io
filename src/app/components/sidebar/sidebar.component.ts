import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LucideAngularModule, House, IdCard, GraduationCap } from 'lucide-angular'

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,LucideAngularModule],
  template: `
      <section 
      class="container"
      [class.expanded]="isExpanded"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
      <div class="nav-buttons-container">
        <button class="nav-button" (click)="navigateToHome()">
          <lucide-icon [img]="House" size="32" color="white"></lucide-icon>
          <p class="nav-button-text">Hjem</p>
        </button>

        <button class="nav-button" (click)="navigateToAbout()">
          <lucide-icon [img]="IdCard" size="32" color="white"></lucide-icon>
          <p class="nav-button-text">Om Meg</p>
        </button>

        <button class="nav-button" (click)="navigateToGrades()">
          <lucide-icon [img]="GraduationCap" size="32" color="white"></lucide-icon>
          <p class="nav-button-text">Karakterer</p>
        </button>
      </div>

      <div class="title-container">
        <h2 class="title">VGK</h2>
        <h5 class="sub-title">Utvikler & Designer</h5>
      </div>
    </section>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  House = House;
  IdCard = IdCard
  GraduationCap = GraduationCap

  isExpanded: boolean = false;

  constructor(private router: Router) {
    this.router = router;
  }

  onMouseEnter() {
    this.isExpanded = true;
  }

  onMouseLeave() {
    this.isExpanded = false;
  }

  // Navigation

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToAbout() {
    this.router.navigate(['/aboutme']);
  }

  navigateToGrades() {
    this.router.navigate(['/grades']);
  }
}

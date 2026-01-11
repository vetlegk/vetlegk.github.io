import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, House, IdCard, GraduationCap } from 'lucide-angular'

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule, NgIf],
  template: `
      <section 
      class="container"
      [class.expanded]="isExpanded"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
      <div class="nav-buttons-container">
        <button class="nav-button">
          <lucide-icon [img]="House" size="32" color="white"></lucide-icon>
          <p *ngIf="isExpanded" class="nav-button-text">Hjem</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="IdCard" size="32" color="white"></lucide-icon>
          <p *ngIf="isExpanded" class="nav-button-text">Om Meg</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="GraduationCap" size="32" color="white"></lucide-icon>
          <p *ngIf="isExpanded" class="nav-button-text">Karakterer</p>
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

  onMouseEnter() {
    this.isExpanded = true;
  }

  onMouseLeave() {
    this.isExpanded = false;
  }
}

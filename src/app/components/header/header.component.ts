import { Component } from '@angular/core';
import { LucideAngularModule, House, IdCard, GraduationCap } from 'lucide-angular'

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  template: `
    <section class="container">
      <div>
        <h2 class="title">VGK • Utvikler & Designer</h2>
      </div>

      <div class="nav-buttons-container">
        <button class="nav-button">
          <lucide-icon [img]="House" size="32" color="white"></lucide-icon>
          <p style="margin-left: 0.4rem; color: white;">Hjem</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="IdCard" size="32" color="white"></lucide-icon>
          <p style="margin-left: 0.4rem; color: white;">Om Meg</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="GraduationCap" size="32" color="white"></lucide-icon>
          <p style="margin-left: 0.4rem; color: white;">Karakterer</p>
        </button>
      </div>
    </section>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  House = House;
  IdCard = IdCard
  GraduationCap = GraduationCap
}

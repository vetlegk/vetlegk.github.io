import { Component } from '@angular/core';
import { LucideAngularModule, House, IdCard, GraduationCap, MoonIcon, Settings } from 'lucide-angular'

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
          <lucide-icon [img]="House" size="32" color="#6C4E31"></lucide-icon>
          <p style="margin-left: 0.4rem; color: #6C4E31;">Hjem</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="IdCard" size="32" color="#6C4E31"></lucide-icon>
          <p style="margin-left: 0.4rem; color: #6C4E31;">Om Meg</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="GraduationCap" size="32" color="#6C4E31"></lucide-icon>
          <p style="margin-left: 0.4rem; color: #6C4E31;">Karakterer</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="MoonIcon" size="32" color="#6C4E31"></lucide-icon>
          <p style="margin-left: 0.4rem; color: #6C4E31;">Dark Mode</p>
        </button>

        <button class="nav-button">
          <lucide-icon [img]="Settings" size="32" color="#6C4E31"></lucide-icon>
          <p style="margin-left: 0.4rem; color: #6C4E31;">Settings</p>
        </button>
      </div>

      
    </section>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  House = House;
  IdCard = IdCard;
  GraduationCap = GraduationCap;
  MoonIcon = MoonIcon;
  Settings = Settings;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedStateService } from './services/shared-state.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  template: `
    <main>
      <section>
        <router-outlet />
      </section> 

      <app-sidebar *ngIf="states.showSidebar()" />
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(public states: SharedStateService) {
    console.log(states.showSidebar());
  }
}
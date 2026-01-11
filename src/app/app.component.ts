import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <main>
      <section>
        <router-outlet/>
      </section> 
      
      <app-sidebar/>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vetlegk.github.io';
}

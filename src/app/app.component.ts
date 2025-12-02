import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <main>
      <app-header/>
    
      <section>
        <router-outlet/>
      </section> 
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vetlegk.github.io';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <main>
<<<<<<< HEAD
=======
      <app-header/>
    
>>>>>>> 0978243eba5acb65a074fae9980ad6331aa1a3bb
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

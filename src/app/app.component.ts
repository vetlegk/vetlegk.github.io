import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BehaviorSubject } from 'rxjs';

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
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  title = 'vetlegk.github.io';

  constructor() {
    const currentTheme = localStorage.getItem("vetlegk_page_theme");
    const isDark = currentTheme === "true"
    this.setTheme(isDark);
  }

  setTheme(value: boolean) {
    this.isDarkModeSubject.next(value);
    localStorage.setItem("vetlegk_page_theme", value.toString());
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedStateService } from '../services/shared-state.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <div>
      <section class="eye-cather">
        <h1>Hei! Velkommen..</h1>

        <div class="puzzle-container">
          <h2>Skriv inn den hemmelig koden for å komme videre.</h2>

          <h4>
            <span
              *ngFor="let char of displayText.split(''); let i = index;"
              id="{{i}}" 
              (mouseenter)="solveGibberish($event.target)"
              (mouseleave)="scrampleText($event.target)"
            >{{ char }}</span>
          </h4>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  clearText: string = "Den hemmelige koden er 1738!";
  displayText: string = "";

  private chars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  constructor(public states: SharedStateService) {}

  ngOnInit() {
    this.displayText = this.generateGibberish(this.clearText.length);
  }

  generateGibberish(length: number): string {
    return Array.from({ length }, () => 
      this.chars[Math.floor(Math.random() * this.chars.length)]
    ).join('');
  }

  solveGibberish(spanElement: EventTarget | null) {
    let charIndex = (spanElement as HTMLElement).id;
    let iterations = 0;

    const interval = setInterval(() => {
      (spanElement as HTMLElement).textContent = this.chars[Math.floor(Math.random() * this.chars.length)];

      if (iterations >= 8) {
        (spanElement as HTMLElement).textContent = this.clearText[(charIndex as unknown as number)];
        clearInterval(interval);
      }
      iterations += 1;
    }, 70);
  }

  scrampleText(spanElement: EventTarget | null) {
    
    let timeoutId = setTimeout(() => {
      let iterations = 0;

      const interval = setInterval(() => {
        (spanElement as HTMLElement).textContent = this.chars[Math.floor(Math.random() * this.chars.length)];
        iterations >= 8 ? clearInterval(interval) : null;
        iterations += 1;
      }, 70);

    }, 1100);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedStateService } from '../../services/shared-state.service';

@Component({
  selector: 'app-secret-text',
  imports: [CommonModule],
  template: `
    <div class="text-wrap">
      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>

      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>

      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>

      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>

      <div>
        <span
          *ngFor="let char of displayText.split(''); let i = index;"
          id="char-{{i}}"
          (mouseenter)="solveGibberish($event.target)"
        >{{ char }}</span>
      </div>

      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>
      
      <div>
        <span
          *ngFor="let char of displayText.split('');"
          (mouseenter)="scrampleText($event.target)"
        >{{ char }}</span>
      </div>
    </div>
  `,
  styleUrl: './secret-text.component.scss'
})
export class SecretTextComponent {
  clearText: string = "Koden er 1-7-3-8!";
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
    let charIndex = (spanElement as HTMLElement).id.split('-')[1];
    let iterations = 0;

    const interval = setInterval(() => {
      (spanElement as HTMLElement).textContent = this.chars[Math.floor(Math.random() * this.chars.length)];

      if (iterations >= 7) {
        (spanElement as HTMLElement).textContent = this.clearText[(charIndex as unknown as number)];

        this.scrampleText(spanElement, 800);
        clearInterval(interval);
      }
      iterations += 1;
    }, 70);
  }

  scrampleText(spanElement: EventTarget | null, time: number = 0) {
    
    let timeoutId = setTimeout(() => {
      let iterations = 0;

      const interval = setInterval(() => {
        (spanElement as HTMLElement).textContent = this.chars[Math.floor(Math.random() * this.chars.length)];
        iterations >= 9 ? clearInterval(interval) : null;
        iterations += 1;
      }, 80);

    }, time);
  }
}
   
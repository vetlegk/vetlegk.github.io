import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SecretTextComponent } from '../components/secret-text/secret-text.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SecretTextComponent],
  template: `
    <div>
      <section class="content">
        <div class="header-container">
          <h2 class="title">Hei! Velkommen..</h2>
          <h5 class="instructions">
            Mitt navn er Vetle, og dette er min personlige hjemmeside.
            Her kan du finne informasjon om meg, mine prosjekter, og karakterer.
            Men først må du <i>finne den hemlige koden gjemt på siden...</i>
          </h5>
        </div>

        <hr class="page-line">
        
        <div class="code-input-container">
          <h5 style="color: greenyellow;;">Skriv inn koden ved hjelp av tastaturet nedenfor:</h5>

          <div style="display: flex; jusifty-content: center; align-items: center;">
            <span 
              *ngFor="let n of [0,1,2,3]"
              id="pad-input-{{n}}"
              #padInputField
            ></span>
          </div>
        </div>

        <div class="puzzle-container">
          <div class="secret-text-container">
            <app-secret-text/>
          </div>
  
          <div class="key-pad-container">
            <span
              *ngFor="let n of ['1','2','3','4','5','6','7','8','9', '0','Del','OK']"
              #padButton
              class="key-pad-button"
            >{{ n }}</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  @ViewChildren('padButton') padButtons!: QueryList<ElementRef>;
  @ViewChildren('padInputField') padInputs!: QueryList<ElementRef>;

  inputIterator: number = 0;

  constructor() {}

  ngAfterViewInit() {

    // Add eventlisteners to key pad buttons
    this.padButtons.forEach((ref) => {
      ref.nativeElement.addEventListener('click', (event: Event) => {
        this.handlePadClick(event.target as HTMLElement)
      })
    })
  }

  handlePadClick(spanElement: HTMLElement) {
    console.log(`clicked ${spanElement.innerText}`);
  }
}


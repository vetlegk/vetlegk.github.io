import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div>
      <section class="eye-cather">
        <h1>Hei! Velkommen..</h1>
        <h4>jeg er Vetle, en frontendutvikler spesialisert i React og Angular.</h4>
        <p>Dette er en personllig nettside som fungerer som en portfolio, CV, og en fremvisning av mine ferdigheter. Her kan du finne mer informasjon om meg, mine prosjekter og hva slags karakterer jeg har oppnådd.</p>

      </section>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

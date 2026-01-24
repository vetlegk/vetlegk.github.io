import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  showSidebar = signal(false);

  constructor() { }

  toggleSidebar() {
    this.showSidebar.set(!this.showSidebar());
  };
}

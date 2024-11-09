import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `
    <button [disabled]="disabled"  (click)="speichern()">Click me</button>
    <p>{{message}}</p>
  `
})
export class AppComponent {
  message = '';
  disabled= false

  speichern(){
  this.message = 'Saving...'
  this.disabled = true

  setTimeout(() => {
    this.disabled = false
  }, 50)

  setTimeout(() => {
    this.message = 'Saved'
    // 50 ms is kind of the threshold. increasing it will make the test pass
  }, 50)
  }
}

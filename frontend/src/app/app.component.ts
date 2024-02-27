import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None // Must have to custom.scss to work the style with global https://angular.io/guide/view-encapsulation
})
export class AppComponent {
  title = 'frontend';
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  onSecondModuleSecondComponentClick() {
    this.router.navigate(['/first-module/second-module/second-component']);
  }
  onSecondModuleFirstComponentClick() {
    this.router.navigate(['/first-module/second-module/first-component']);
  }
  onFirstModuleSecondComponentClick() {
    this.router.navigate(['/first-module/second-component']);
  }
  onFirstModuleFirstComponentClick() {
    this.router.navigate(['/first-module/first-component']);
  }
  onHomeSecondComponentClick() {
    this.router.navigate(['/app-second']);
  }
  onHomeFirstComponentClick() {
    this.router.navigate(['/app-first']);
  }
  onHomeClick() {
    this.router.navigate(['/']);
  }
}

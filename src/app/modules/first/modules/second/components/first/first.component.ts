import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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

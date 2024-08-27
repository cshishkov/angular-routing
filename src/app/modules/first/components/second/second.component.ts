import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
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

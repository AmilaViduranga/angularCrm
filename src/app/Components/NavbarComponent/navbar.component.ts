import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {

  }
  clicked(event) {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

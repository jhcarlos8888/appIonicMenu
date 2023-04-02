import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token = "Jc8545644"

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('token', this.token);
    console.log("🚀 ~ file: login.page.ts:19 ~ LoginPage ~ login ~ this.token:", this.token);
    this.router.navigate(["/home"]);
  }

}

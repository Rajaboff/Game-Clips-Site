import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  observable = of(1,2,3,4,5)

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    // console.log(this.credentials);

    const subscription = this.observable.subscribe({
      next(value) {
        console.log(value)
      },
      complete() {
        console.log('complete')
      }
    })
  }

}

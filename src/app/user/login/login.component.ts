import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  showAlert = false
  alertMsg = 'Please wait!'
  alertColor = 'indigo'
  inSubmission = false

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login() {
    this.showAlert = true
    this.alertMsg = 'Please wait!'
    this.alertColor = 'indigo'
    this.inSubmission = true

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (error) {
      this.inSubmission = false
      this.alertMsg = 'An unexpected error occurred!'
      this.alertColor = 'indigo'

      console.log(error);

      return
    }

    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'indigo'
  }

}

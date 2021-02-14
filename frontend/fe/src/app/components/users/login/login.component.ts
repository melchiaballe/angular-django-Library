import { Component, OnInit } from '@angular/core';

import { Login } from '../../../commons/models/login.models';
import { LoginForm } from '../../../commons/forms/login.forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : LoginForm;

  constructor() { }

  ngOnInit(): void {
    this.form = new LoginForm(new Login);
  }

  onSubmit({ value, valid }: { value: Login, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    if (valid) {
      alert("VALID")
    }
  }
}

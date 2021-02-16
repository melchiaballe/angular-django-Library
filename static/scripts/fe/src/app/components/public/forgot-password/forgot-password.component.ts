import { Component, OnInit } from '@angular/core';
import { ForgotPasswordModel } from 'src/app/commons/models/forgot-password.model';
import { ForgotPasswordForm } from 'src/app/commons/forms/password.forms';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private form : ForgotPasswordForm;
  successForgotPassword = false;
  sending = false;
  errors = {};

  private hasError = false;

  constructor(
    private auth: AuthService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.form = new ForgotPasswordForm(new ForgotPasswordModel);
  }

  onSubmit({ value, valid }: { value: ForgotPasswordModel, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    this.form.submitted = true;
    this.form.err = "";
    if (valid) {
      this.sending = true;
      this.auth.forgotPassword(value)
        .then(resp => {
          this.successForgotPassword = true;
        })
        .catch(err => {
          console.log(err.error);
          this.form.err = err.error.email;
          this.hasError = true;
          this.sending = false;
        })
      ;
    }
  }

  inputChange(value) {
    if(this.hasError === true) {
      this.hasError = false;
    }

    if(this.sending === true){
      this.sending = false;
    }
  }

  redirectLogin(){
    if (this.auth.authenticated())
    {
      this.state.go('logout')

    }else{
      this.state.go('login')
    }
  }
}

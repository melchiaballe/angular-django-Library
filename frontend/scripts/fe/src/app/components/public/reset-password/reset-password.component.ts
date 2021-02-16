import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { ResetPasswordForm } from 'src/app/commons/forms/password.forms';
import { ResetPasswordModel } from 'src/app/commons/models/reset-password.model';
import { AuthService } from 'src/app/commons/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private form : ResetPasswordForm;
  private token : string;
  private hasError = false;
  private disable = false;

  errors = {};
  successResetPassword = false;

  constructor(
    private auth: AuthService,
    private state: StateService,
  ) { }

  ngOnInit() {
    this.form = new ResetPasswordForm(new ResetPasswordModel);
    this.token = this.state.params['token'];
  }

  onSubmit({ value, valid }: { value: ResetPasswordModel, valid: boolean }) {
    // send the form data to the backend if the value
    // format are valid.
    this.form.submitted = true;
    this.form.err = "";
    value.token = this.token;
    if (valid) {
      this.disable = true;
      this.auth.resetPassword(value)
        .then(resp => {
          this.successResetPassword = true;
        })
        .catch(err => {
          this.form.err = err.error.non_field_errors;
          this.hasError = true;
          this.disable = false;
        })
      ;
    }
  }

  inputChange(value) {
    if(this.hasError === true) {
      this.hasError = false;
    }

    if(this.disable === true){
      this.disable = false;
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

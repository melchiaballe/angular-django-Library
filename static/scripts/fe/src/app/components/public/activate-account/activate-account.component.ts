import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  private token : string;
  private error : string;

  private isSuccessful: boolean = false;

  constructor(
    private auth: AuthService,
    private state: StateService
  ){ }

  ngOnInit() {
    this.token = this.state.params['token'];

    // send Welcome Email after Activation
    this.auth.activateAccount({'token': this.token})
      .then(resp => {
        this.isSuccessful = true;
        this.auth.getActivatedUser({'token': this.token})
        .then(user => {
          this.auth.setToken({'token': user[0].key});
          this.state.go('dashboard-activated', {'activated': true});
        });
      })
      .catch(err => {
        this.error = err.error.non_field_errors;
      });
  }

  // redirectLogin(){
  //   if (this.auth.authenticated())
  //   {
  //     this.state.go('logout')

  //   }else{
  //     this.state.go('login')
  //   }
  // }

}

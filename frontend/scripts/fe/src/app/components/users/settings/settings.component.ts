import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { UserForm } from 'src/app/commons/forms/user.forms';
import { EditPasswordForm, AddPasswordForm } from 'src/app/commons/forms/password.forms';
import { EditEmailForm } from 'src/app/commons/forms/email.forms';
import { User } from 'src/app/commons/models/user.model';
import { EditPasswordModel } from 'src/app/commons/models/edit-password.model';
import { AddPasswordModel } from 'src/app/commons/models/add-password.model';
import { EditEmailModel } from 'src/app/commons/models/edit-email.model';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { StateService } from '@uirouter/core';
import { UserService } from 'src/app/commons/services/auth/user.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  /* Form Intialization */
  private form : UserForm;
  private edit_password_form: EditPasswordForm;
  private edit_email_form: EditEmailForm;
  //private add_password_form: AddPasswordForm;
  private file: File | null = null;
  private date: Date = new Date;

  private checkPass : boolean;
  private switchExpression: string;
  private switchExpression1: string;
  private errorString:string;
  private changePic : boolean;
  private token: string;

  private checkDeact : boolean = true;
  private editSuccessMessage = false;
  private usernameHasError = false;
  private passwordHasError = false;
  private deactPassHasErr = false;
  private emailNoChanges = false;
  private emailHasError = false;

  private passbtn_disable = false;
  private deacbtn_disable = false;
  private emailbtn_disabled = false;
  private ProfNoChanges:boolean = true;


  constructor(
    private auth: AuthService,
    private state: StateService,
    private user: UserService,
    private nav: NavigationService,
  ) { }

  async ngOnInit() {
    // initialize the form.
    this.switchExpression = null;
    this.form = new UserForm(new User);
    this.edit_password_form = new EditPasswordForm(new EditPasswordModel);
    this.edit_email_form = new EditEmailForm(new EditEmailModel);
    //this.add_password_form = new AddPasswordForm(new AddPasswordModel);

    setTimeout(() => {
      this.nav.hasLoaded = false
    }, 100)

    if (this.auth.user.id == null) {
      // get user information from the backend. (sync)
      await this.auth.setuser();
    }


    this.auth.getUser();
    this.token = this.auth.getToken().token;

    this.nav.changeHeaderTitle('Settings');

    this.form.defaultValue(this.auth.user);
    this.checkPass = this.auth.user.has_usable_pass;

  }

  emailInputChange(value) {
    if(this.emailHasError === true) {
      return this.emailHasError = false;
    }

    if(this.emailNoChanges === true) {
      return this.emailNoChanges = false;
    }
  }

  passwordInputChange(value) {
    if(this.passwordHasError === true) {
      this.passwordHasError = false;
    }
  }

  usernameInputChange(value) {
    if(this.usernameHasError === true) {
      this.usernameHasError = false;
    }
  }

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    // initiate submission of form.
    this.form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if (valid ) {
      if(this.form.form.dirty)
      {
        this.user.update(value)
        .then(resp => {
          this.form.err = "";
          this.state.go('user-settings');
          this.editSuccessMessage = true;
          this.ProfNoChanges = true;

          setTimeout(() => {
            this.editSuccessMessage  = false;
          }, 3000)
        })
        .catch(err => {
          this.form.err = err.error.username;
          if(err.error.username) {
            this.usernameHasError = true;
          }
        });
      }else{
        this.ProfNoChanges = false;
      }
    }
  }

  onEditPasswordSubmit({value, valid}: {value: EditPasswordModel, valid:boolean}){
    // initiate submission of form.
    this.edit_password_form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if(valid){
      this.passbtn_disable = true;
      this.user.updatePassword(value)
        // initialize switchExpression to redirect to success view
        // re initialize edit password form to empty fields
        .then(resp => { this.switchExpression = 'success'; this.edit_password_form = new EditPasswordForm(new EditPasswordModel); })
        .catch(err => {
          if(err.error.new_password)
          {
            this.edit_password_form.err = "This password is entirely numeric or too common."
          }else if(err.error.non_field_errors){
            this.edit_password_form.err = err.error.non_field_errors;
          }else{
            this.edit_password_form.err = "Invalid Input. Please re-type New and Confirm Password.";
          }
          if(err) {
            this.passwordHasError = true;
            this.passbtn_disable = false;
          }
        });
    }else{
      this.passbtn_disable = false;
    }

  }

  onEditEmailSubmit({value, valid}: {value: EditEmailForm, valid:boolean}){
    // initiate submission of form.
    this.edit_email_form.submitted = true;
    // send the form data to the backend if the value
    // format are valid.
    if(value['email'] === this.auth.user.email)
    {
      this.emailNoChanges = true;
    }else{
      this.emailNoChanges = false;
      if(valid){
        this.emailbtn_disabled = true;
        this.user.updateEmail(value)
          // initialize switchExpression to redirect to success view
          // re initialize edit password form to empty fields
          .then(resp => {
            this.switchExpression = 'edit_email_success';
            this.edit_email_form = new EditEmailForm(new EditPasswordModel);
            this.form.form.value.email = value['email'];
            this.auth.user.email = this.form.form.value.email;
          })
          .catch(err => {
            this.edit_email_form.err = err.error.email;
            if(this.edit_email_form.err)
            {
              this.emailHasError = true;
              this.emailbtn_disabled = false;
            }
          });
      }
    }
  }

  // onAddPasswordSubmit({value, valid}: {value: AddPasswordModel, valid:boolean}){
  //   // initiate submission of form.
  //   this.add_password_form.submitted = true;
  //   // send the form data to the backend if the value
  //   // format are valid.
  //   if(valid){
  //     this.user.addPassword(value)
  //       // initialize switchExpression to redirect to success view
  //       // re initialize edit password form to empty fields
  //       .then(resp => { this.switchExpression = 'success'; this.add_password_form = new AddPasswordForm(new AddPasswordModel); this.checkPass = true; })
  //       .catch(err => { this.add_password_form.err = err.error.non_field_errors; });
  //   }
  // }

  changeProfilePic($event){
    $event.preventDefault();
    this.changePic = !this.changePic;
  }

  changePassClick($event){
    // prevent href default behavior

    $event.preventDefault();
    // initialize switchExpression to redirect to change password form
    this.switchExpression = 'change_password';

    if(this.passbtn_disable === true) {
      this.passbtn_disable = false;
    }
  }

  changeEmailClick($event){
    // prevent href default behavior
    
    $event.preventDefault();
    // initialize switchExpression to redirect to change password form
    this.switchExpression = 'change_email';

    if(this.emailbtn_disabled === true) {
      this.emailbtn_disabled = false;
    }
  }

  cancelEmailEvent(){
    // re initialize edit email and add email form to empty fields
    this.edit_email_form = new EditEmailForm(new EditEmailModel);

    // initialize switchExpression to redirect to default view
    this.switchExpression = '';
  }

  cancelPasswordEvent(){
    // re initialize edit password and add password form to empty fields
    this.edit_password_form = new EditPasswordForm(new EditPasswordModel);
    //this.add_password_form = new AddPasswordForm(new AddPasswordModel);
    // initialize switchExpression to redirect to default view
    this.switchExpression = '';
  }

  deacPassInputChange(value) {
    if(this.deactPassHasErr === true) {
      this.deactPassHasErr = false;
    }
  }


  createPassClick(){
    // initialize switchExpression to redirect to create password form
    this.switchExpression = 'create_password';
  }

}

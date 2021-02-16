import * as _ from 'lodash';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


export class SubscriptionForm {
  public form: FormGroup;
  public err: string = null;

  constructor (data) {
    /* Initialize the form builder
    */
    this.form = new FormBuilder().group({
      user    : new FormControl(null),
      subscription_plan    : new FormControl(null),
      type    : new FormControl(null),
    });
  }

  /* Check if form field is valid
   */
  valid (f) {
    return !(!this.form.get(f).valid && this.form.get(f).touched);
  }

  /* Check if the form field has an error
   */
  hasError (f, e) {
    return this.form.get(f).hasError(e) && this.form.get(f).touched;
  }

}
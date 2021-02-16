import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export class CardForm {
    public form: FormGroup;
    public err: string = null;
    public submitted: Boolean = false;

    constructor (data) {
      /* Initialize the form builder
       */
      this.form = new FormBuilder().group({
        customer_token : new FormControl(null),
        card_token: new FormControl(null),
        exp_month: new FormControl(null),
        exp_year : new FormControl(null),
      })
    }

    /* Check if form field is valid
     */
    valid (f) {
      return !(!this.form.get(f).valid && (this.form.get(f).touched || this.submitted));
    }

    /* Check if the form field has an error
     */
    hasError (f, e) {
      return this.form.get(f).hasError(e) && (this.form.get(f).touched || this.submitted);
    }

    /* DEFAULT VALUE
     * set the value of the form fields if there is a default value.
     */
    defaultValue (d) {
      // set a timeout just incase that the value is not yet ready.
      this.form.patchValue(d);
    }

  }
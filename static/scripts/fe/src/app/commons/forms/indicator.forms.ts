import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


export class IndicatorSetForm {
  public form: FormGroup;
  public submitted: Boolean = false;

  constructor (data) {
    /* Initialize the form builder
     */
    this.form = new FormBuilder().group({
      indicator   : new FormControl(data.indicator, [Validators.required]),
      period : new FormControl(null),
      devup : new FormControl(null),
      devdown : new FormControl(null),
      accel : new FormControl(null),
      maxval : new FormControl(null),
      nbdev : new FormControl(null),
      floatnum : new FormControl(null),
      fastperiod : new FormControl(null),
      slowperiod : new FormControl(null),
      signalperiod : new FormControl(null),
      fastk_period : new FormControl(null),
      fastd_period : new FormControl(null),
      slowk_period : new FormControl(null),
      slowd_period : new FormControl(null),
      timeperiod1 : new FormControl(null),
      timeperiod2 : new FormControl(null),
      timeperiod3 : new FormControl(null),
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
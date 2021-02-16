import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


export class StrategyForm {
  public form: FormGroup;
  public submitted: Boolean = false;
  public nameArray: Array<any> = [];

  constructor (data) {
    /* Initialize the form builder
     */
    this.form = new FormBuilder().group({
      id  : new FormControl(null),
      name        : new FormControl(data.name, [Validators.required, Validators.maxLength(80)]),
      start_datetime    : new FormControl(data.start_datetime, [Validators.required, Validators.pattern("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]")]),
      end_datetime    : new FormControl(data.end_datetime, [Validators.required, Validators.pattern("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]")]),
      trading_time     : new FormControl(data.trading_time),
      initial_capital: new FormControl(data.initial_capital, [Validators.required, Validators.min(100), Validators.max(100000000)]),
      forex_trade_size : new FormControl(data.forex_trade_size, [Validators.required, Validators.min(100), Validators.max(100000000)]), 
      crypto_trade_size : new FormControl(data.crypto_trade_size, [Validators.required, Validators.min(100), Validators.max(100000000)]), 
      time_frame_name : new FormControl(data.time_frame_name),
      entry_direction : new FormControl(data.entry_direction),
      pip_comm : new FormControl(data.pip_comm, [Validators.required, Validators.max(100)]),
      pip_take_profit : new FormControl(data.pip_take_profit, [Validators.required, Validators.min(0.1)]),
      pip_stop_loss : new FormControl(data.pip_stop_loss, [Validators.required, Validators.min(0.1)]),
      pip_trail_stop_loss : new FormControl(data.pip_trail_stop_loss, [Validators.required]),
      crypto_comm : new FormControl(data.crypto_comm, [Validators.required, Validators.max(10)]),
      crypto_take_profit : new FormControl(data.crypto_comm, [Validators.required, Validators.min(0.1)]),
      crypto_stop_loss : new FormControl(data.crypto_stop_loss, [Validators.required, Validators.min(0.1)]),
      crypto_trail_stop_loss : new FormControl(data.crypto_trail_stop_loss, [Validators.required]),
      max_holding_periods : new FormControl(data.max_holding_periods, [Validators.required, Validators.min(0)]),
      max_capital_loss : new FormControl(data.max_capital_loss, [Validators.required, Validators.min(0), Validators.max(100)]),
      complex_exit : new FormControl(data.complex_exit),
      allow_notifications : new FormControl(data.allow_notifications),
      is_public : new FormControl(data.is_public),
      is_active : new FormControl(data.is_active),
      // is_archived : new FormControl(data.is_archived),
      is_deployed : new FormControl(data.is_deployed),
      currency_pair: new FormControl(null),
      entry_combo_condition: new FormControl(data.entry_combo_condition),
      exit_combo_condition: new FormControl(data.exit_combo_condition),
      entry_technicalset: new FormControl(null),
      exit_technicalset: new FormControl(null),
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

  isInteger (f) {
    if(this.form.get(f).value % 1 != 0 && this.form.get(f).value != null) {
      return this.form.get(f)
    }
  }

  // checkStartDate (f) {
  //   if(new Date(this.form.get(f).value) < new Date("2017-01-01 00:00:00")) {
  //     return this.form.get(f)
  //   }
  // }

  checkEndDate (f) {
    if(new Date(this.form.get(f).value) <= new Date(this.form.get('start_datetime').value)) {
      return this.form.get(f);
    }
  }
}


export class DeleteStrategyForm {
  public form: FormGroup;
  public submitted: Boolean = false;

  constructor (data) {
    /* Initialize the form builder
     */
    this.form = new FormBuilder().group({
      id : new FormControl(null),
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
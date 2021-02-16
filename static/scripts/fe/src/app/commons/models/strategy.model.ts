
import { CurrencyPair } from './currency.model';
import { SignalIndicator } from './indicatorset.model';
import { User } from './user.model';


export class Strategy {
    id              : string = null;
    creator         : User = new User;
    name            : string = null;
    created_at      : string = null;
    start_datetime  : string = null;
    end_datetime    : string = null;
    trading_time    : string = null;
    initial_capital : string = null;
    forex_trade_size   : string = null;
    crypto_trade_size  : string = null;
    time_frame_name  : string = null;
    entry_direction    : string = null;
    pip_comm          : string = null;
    pip_take_profit  : string = null;
    pip_stop_loss    : string = null;
    pip_trail_stop_loss  : string = null;
    crypto_comm  : string = null;
    crypto_take_profit    : string = null;
    crypto_stop_loss      : string = null;
    crypto_trail_stop_loss : string = null;
    complex_exit    : string = null;
    allow_notifications : boolean = null;
    // is_archived : boolean = null;
    is_public : boolean = null;
    is_active : boolean = null;
    strategycurrencypair_set : Array<CurrencyPair> = null;
    signalindicator_set : Array<SignalIndicator> = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
}


export class SimplifiedStrategy {
    id              : string = null;
    creator         : User = new User;
    name            : string = null;
    start_datetime  : string = null;
    end_datetime    : string = null;
    trading_time    : string = null;
    initial_capital : string = null;
    forex_trade_size   : string = null;
    crypto_trade_size  : string = null;
    time_frame_name  : string = null;
    entry_direction    : string = null;
    pip_comm          : string = null;
    pip_take_profit  : string = null;
    pip_stop_loss    : string = null;
    pip_trail_stop_loss  : string = null;
    crypto_comm  : string = null;
    crypto_take_profit    : string = null;
    crypto_stop_loss      : string = null;
    crypto_trail_stop_loss : string = null;
    complex_exit    : string = null;
    allow_notifications : boolean = null;
    // is_archived : boolean = null;
    is_public : boolean = null;
    is_active : boolean = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
}

export class DeleteStrategy {

  id            : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}
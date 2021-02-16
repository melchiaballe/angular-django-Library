import { Strategy } from "./strategy.model";


export class Currency {
    id         : string = null;
    code       : string = null;
    c_from     : string = null;
    c_to       : string = null;
    name       : string = null;
    c_type     : string = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
}


export class CurrencyPair {
  id         : string = null;
  strategy   : Strategy = new Strategy;
  pair       : Currency = new Currency;

  constructor(data={}) {
    Object.assign(this, data);
  }
}

export class StrategyCurrencyPair {
  name       : string = null;

  constructor(data={}) {
    Object.assign(this, data);
  }
}
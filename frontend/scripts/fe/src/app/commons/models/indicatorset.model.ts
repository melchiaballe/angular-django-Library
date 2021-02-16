import { Strategy } from "./strategy.model";


export class TechnicalIndicator {
    id         : string = null;
    indicator   : string = null;
    kwargs_dict     : string = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
}

export class IndicatorSet {
    id         : string = null;
    signal_indicator   : SignalIndicator = new SignalIndicator;
    indicator_a     : TechnicalIndicator = new TechnicalIndicator;
    indicator_b    : TechnicalIndicator = new TechnicalIndicator;
    indicator_a_b_logic  : string = null;


    constructor(data={}) {
      Object.assign(this, data);
    }
}


export class SignalIndicator {
    id         : string = null;
    strategy       : Strategy = new Strategy;
    signal_type     : string = null;
    combo_condition    : string = null;
    signal_indicator  : Array<IndicatorSet> = null;


    constructor(data={}) {
      Object.assign(this, data);
    }
}
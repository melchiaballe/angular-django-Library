/* Model class for editPassword
 */
export class IndicatorSet {
    indicator : string = null;
    kwargs_dict : string = null;
    period : string = null;
    devup : string = null;
    devdown : string = null;
    accel : string = null;
    maxval : string = null;
    floatnum : string = null;
    nbdev : string = null;
    fastperiod : string = null;
    slowperiod : string = null;
    signalperiod : string = null;
    fastk_period : string = null;
    fastd_period : string = null;
    slowk_period : string = null;
    slowd_period : string = null;
    timeperiod1 : string = null;
    timeperiod2 : string = null;
    timeperiod3 : string = null;

    constructor(data={}) {
        Object.assign(this, data);
    }
  }
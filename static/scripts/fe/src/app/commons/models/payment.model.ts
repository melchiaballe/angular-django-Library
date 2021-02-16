/* Model class for signing in.
 */
export class Payment {
    country    : string = null;
    address_state    : string = null;
    address_city    : string = null;
    address_street : string = null;
    address_street_1 : string = null;
    address_zip : string = null;
    card_token : string = null;
    product : string = null;
    isMonthly : string = null;
    customer_token : string = null;
    amount : string = null;

    constructor (data={}) {
      Object.assign(this, data);
    }
  }
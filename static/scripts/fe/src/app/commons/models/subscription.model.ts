/* Model class for signing in.
 */
export class Subscription {
    user    : string = null;
    subscription_plan : string = null;
    type : string = null;

    constructor (data={}) {
      Object.assign(this, data);
    }
  }
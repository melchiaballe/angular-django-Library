/* Model class for editPassword
 */
export class ForgotPasswordModel {
    email : string = null;

    constructor(data={}) {
        Object.assign(this, data);
    }
  }
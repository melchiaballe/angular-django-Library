/* Model class for editPassword
 */
export class ResetPasswordModel {
    token: string = null;
    new_password : string = null;
    confirm_new_password : string = null;

    constructor(data={}) {
        Object.assign(this, data);
    }
  }
export class Deactivate {
    password : string = null;
    deactivate : string = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
  }
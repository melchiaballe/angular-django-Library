// export class DeleteCard {

//     customer_token : string = null;
//     card_token: string = null;

//     constructor(data={}) {
//       Object.assign(this, data);
//     }
//   }

export class Books {
  
    customer_token : string = null;
    card_token: string = null;
    exp_month : string = null;
    exp_year : string = null;

    constructor(data={}) {
      Object.assign(this, data);
    }
}
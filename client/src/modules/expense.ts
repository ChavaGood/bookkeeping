
export enum PaymentMethod{cash, credit , bank_transfer}

export interface Expense{
 id:number,
 sum:number,
 providerName:string,
 paymentMethod:PaymentMethod,
 date:Date,
 details:string
}




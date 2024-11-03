import { Customer } from "./customer";
import { PaymentMethod } from "./expense";


export interface Receipt{
    id:number,
    date:Date,
    sum:number,
    paymentMethod:PaymentMethod,
    customer:Customer,
    details:string
}






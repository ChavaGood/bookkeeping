import { Component, Input } from '@angular/core';
import { Receipt } from '../../../modules/receipt';
import { ReceiptService } from '../../../services/receipt.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-customr-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './by-customer-id.component.html',
  styleUrl: './by-customer-id.component.scss'
})
export class ByCustomerIdComponent {
currentReceipt?=new Array<Receipt>()
@Input() set customerId(num:number|undefined)
  {
    this.getCurentReceipt(num);
  }
constructor(private r:ReceiptService){}
getCurentReceipt(customerId:number|undefined){
  if(customerId){
  this.r.getAll().subscribe(data=>{console.log({data});
  
    this.currentReceipt=data;
    this.currentReceipt= this.currentReceipt?.filter(c=>c.customer.id==customerId);
  })

} 
}

}

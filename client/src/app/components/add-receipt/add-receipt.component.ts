import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../modules/customer';
import { CustomerService } from '../../../services/customer.service';
import { ReceiptService } from '../../../services/receipt.service';
import { CommonModule } from '@angular/common';
import { Receipt } from '../../../modules/receipt';
import { datevalidation } from '../Validations';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
@Component({
  selector: 'app-add-receipt',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,AddCustomerComponent],
  templateUrl: './add-receipt.component.html',
  styleUrl: './add-receipt.component.scss'
})
export class AddReceiptComponent {
  receiptForm: FormGroup;
  customers=new Array<Customer>();
  add_customer:boolean=false;
  constructor(private fb: FormBuilder, private customerService: CustomerService, private receiptService: ReceiptService) {
    this.customerService.getAll().subscribe(data=>this.customers=data)
    this.receiptForm = this.fb.group({
      date: ['', [Validators.required,datevalidation()]],
      sum: ['',[ Validators.required,Validators.min(0)]],
      paymentMethod: ['', Validators.required],
      details: [''],
      customer: ['', Validators.required]
    });
  }
  

  onSubmit() {
    const {controls}=this.receiptForm
    let mycustomer:Customer;
    this.customerService.getById(controls['customer'].value).subscribe(data=>{mycustomer=data;
    let receipt:Receipt={
      id:0,
      date:controls['date'].value,
      sum:controls['sum'].value,
      paymentMethod:controls['paymentMethod'].value,
      customer:mycustomer,
      details:controls['details'].value
    }
    this.receiptService.addReceipt(receipt).subscribe( data=>{
      console.log({data});
      this.receiptForm.reset();
    } );
  })
  }
  addCustomer(){
    this.add_customer=true;
  }
}



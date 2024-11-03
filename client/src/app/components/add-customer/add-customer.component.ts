import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../../../modules/customer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {CustomerService} from '../../../services/customer.service'
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('[0-9]{10}')],
    });
  }

  onSubmit() {
    const {controls}=this.customerForm
    
    let customer:Customer={
      id:0,
      name:controls['name'].value,
      phone:controls['phoneNumber'].value,
      email:controls['email'].value}
    this.customerService.addCustomer(customer).subscribe( data=>{
      console.log({data});
      this.customerForm.reset();
    } );
  }
  

  
}





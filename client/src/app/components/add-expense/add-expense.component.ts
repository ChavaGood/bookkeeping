import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../modules/customer';
import { CustomerService } from '../../../services/customer.service';
import { CommonModule } from '@angular/common';
import { Expense } from '../../../modules/expense';
import { ExpenseService } from '../../../services/expense.service';
import {datevalidation} from '../Validations'
@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  expenseForm: FormGroup;
  customers=new Array<Customer>();
  constructor(private fb: FormBuilder, private customerService: CustomerService, private expenseService: ExpenseService) {
    this.customerService.getAll().subscribe(data=>this.customers=data)
    this.expenseForm = this.fb.group({
      date: ['', [Validators.required,datevalidation()]],
      sum: ['',[ Validators.required,Validators.min(0)]],
      paymentMethod: ['', Validators.required],
      details: [''],
      providerName: ['', Validators.required]
    });
  }
  

  onSubmit() {
    const {controls}=this.expenseForm
    
    let expense:Expense={
      id:0,
      date:controls['date'].value,
      sum:controls['sum'].value,
      paymentMethod:controls['paymentMethod'].value,   
      providerName:controls['providerName'].value,
      details:controls['details'].value
    }
    this.expenseService.addExpense(expense).subscribe( data=>{
      console.log({data});
      this.expenseForm.reset();
    } );
  }
}



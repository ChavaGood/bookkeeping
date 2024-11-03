import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerService } from '../services/customer.service';
import { AddReceiptComponent } from './components/add-receipt/add-receipt.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { RevenuesAndExpensesComponent } from './components/revenues-and-expenses/revenues-and-expenses.component';
import { ByCustomerIdComponent } from './components/by-customer-id/by-customer-id.component';
import { ExpenseService } from '../services/expense.service';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddCustomerComponent,AddReceiptComponent,AddExpenseComponent,RevenuesAndExpensesComponent,ByCustomerIdComponent
    ,RouterLink,RouterLinkActive
  ],
  providers:[CustomerService,ExpenseService,ReceiptService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BookKeeping';
}

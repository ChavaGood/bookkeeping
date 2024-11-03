import { Routes } from '@angular/router';
import { AddReceiptComponent } from './components/add-receipt/add-receipt.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RevenuesAndExpensesComponent } from './components/revenues-and-expenses/revenues-and-expenses.component';

export const routes: Routes = [
    {path:'add-receipt' ,component:AddReceiptComponent},
    {path:'add-expense' ,component:AddExpenseComponent},
    {path:'reports' ,component:ReportsComponent},
    {path:'reports/report-by-year' ,component:RevenuesAndExpensesComponent}

];

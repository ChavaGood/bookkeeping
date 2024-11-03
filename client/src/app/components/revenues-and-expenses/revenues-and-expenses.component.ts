import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { ReceiptService } from '../../../services/receipt.service';
import { Expense } from '../../../modules/expense';
import { Receipt } from '../../../modules/receipt';

@Component({
  selector: 'app-revenues-and-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenues-and-expenses.component.html',
  styleUrl: './revenues-and-expenses.component.scss'
})
export class RevenuesAndExpensesComponent {
   allExpenses=new Array<Expense>()
   allReceipts=new Array<Receipt>()
   @Input() set dates(dates:string|undefined)
  {
    console.log({dates});
    
    this.getBetween(dates);
  }
   @Input() set year(num:number|undefined)
  {
    this.getCurentYear(num);
  }
  constructor(private expenseService:ExpenseService,private receiptService:ReceiptService){
    this.expenseService.getAll().subscribe(data=>this.allExpenses=data)
    this.receiptService.getAll().subscribe(data=>this.allReceipts=data)
    
   }
   getCurentYear(year:number|undefined){
    if(year){
      this.expenseService.getOneYear(year??0).subscribe(data=>this.allExpenses=data)
      this.receiptService.getOneYear(year??0).subscribe(data=>this.allReceipts=data)
    }
   
}
getBetween(dates:string|undefined){
  
  if(this.dates!=''){
    this.expenseService.getBetweenDates(dates??'').subscribe(data=>{console.log({data});
      this.allExpenses=data})
    this.receiptService.getBetweenDates(dates??'').subscribe(data=>this.allReceipts=data)
  }
}

}


// import { Component, EventEmitter, Output } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { Job } from '../../modules/interfaces';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-job-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './job-list.component.html',
//   styleUrl: './job-list.component.scss'
// })
// export class JobListComponent {

//   @Output() selectJobNumber=new EventEmitter<number>()
//   alljobs= new Array<Job>();
// constructor(private dataService:DataService){
//   this.dataService.getAll().subscribe(data=>{
//     this.alljobs=data

//   })

// }
// selectJob(jobNumber:number|undefined){
//   console.log({jobNumber});
//   this.selectJobNumber.emit(jobNumber)
// }
// }


import { Component, OnInit } from '@angular/core';
import { UpcommingPayment } from 'src/model/UpcommingPayments.model';
import { SummaryService } from 'src/services/summary.service';

@Component({
  selector: 'app-upcomming-payments',
  templateUrl: './upcomming-payments.component.html',
  styleUrls: ['./upcomming-payments.component.css']
})
export class UpcommingPaymentsComponent implements OnInit {

  upcomingPayment :UpcommingPayment[] = []

  constructor(private summaryService:SummaryService){}

  ngOnInit(): void {

    this.summaryService.getUpcommingPayments().subscribe({
      next:(result:UpcommingPayment[])=>{
        this.upcomingPayment = result
      },
      error:(e)=>{
        throw new Error (e.message)
      },
      complete:()=>{

      }
    })

  }

}

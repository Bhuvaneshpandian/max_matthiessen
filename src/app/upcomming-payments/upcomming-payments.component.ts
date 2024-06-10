import { Component } from '@angular/core';
import { UpcomingPayment } from 'src/model/UpcomingPayement.model';

@Component({
  selector: 'app-upcomming-payments',
  templateUrl: './upcomming-payments.component.html',
  styleUrls: ['./upcomming-payments.component.css']
})
export class UpcommingPaymentsComponent {

  upcomingPayment :UpcomingPayment[] = [
    {
      date: "09:05:2024",
      paymentType: "Premium Due",
      paymentLabel: "Life Insurance",
      amount: 350,
      tax: 105
    },
    {
      date: "10:06:2024",
      paymentType: "Premium Due",
      paymentLabel: "Life Insurance",
      amount: 350,
      tax: 105
    }

  ]

}

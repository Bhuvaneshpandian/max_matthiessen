import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent {
  @Output() onRowClick = new EventEmitter<void>();

  onContentClick() {
    this.onRowClick.emit()
  }


}

import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public tableData1: any;

  constructor() { }

  ngOnInit() {
  }
  showNotification(){
    this.tableData1 = {
      headerRow: [ 'Location code','location name', 'location Type'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger']
      ]
  };
  }
}

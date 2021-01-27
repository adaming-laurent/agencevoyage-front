import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  public tableData1: any;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Company id','Company Name', 'Company Details'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger']
      ]
  };
  }

}

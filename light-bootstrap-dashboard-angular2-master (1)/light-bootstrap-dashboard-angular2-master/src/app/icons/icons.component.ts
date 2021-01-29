import { Component, OnInit } from '@angular/core';
import { OperatingCompany } from 'app/model/operatingCompany';
import { OperatingService } from 'app/service/operating.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  operatings: OperatingCompany[];
  operating: OperatingCompany = new OperatingCompany();

  constructor(private operatingService : OperatingService) { }

  ngOnInit() {
    this.findAllOperatings();
  }

  findAllOperatings(){
    this.operatingService.findAllOperatings().subscribe(data => {this.operatings = data; console.log("operatings:"+this.operatings)});
    console.log(this.operatings);
  }

  deleteOperating(idOperating:number) {
    this.operatingService.deleteOperating(idOperating).subscribe(
      () => { this.findAllOperatings() }
    );
  }

  getOneOperating(idOperating: number){
    this.operatingService.findOneOperating(idOperating).subscribe(o => {
      this.operating = o;
    })
  }

  saveOperating() {
    this.operatingService.saveOperating(this.operatingService).subscribe(
      () => {this.findAllOperatings();
      this.operating = new OperatingCompany();
    }
    )
  }


}

import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { CustomerService } from 'app/service/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  customers: Customer[];
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.findAll();
  }
  findAll() {
    this.customerService.findAll().subscribe(data => { this.customers = data });
  }
  // findOne(id){
  //   this.userService.findOne(id).subscribe(data => )
  //}
  delete(customer) {
    this.customerService.delete(customer.CustomerId).subscribe(
      () => { this.findAll() }
    );
  }

  save() {
    this.customerService.save(this.customer).subscribe(
      ()=>{this.findAll();
      this.customer = new Customer();
      }
    )
  }

}

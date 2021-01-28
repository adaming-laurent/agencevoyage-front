import { Component, OnInit } from '@angular/core';
import { LocationService } from 'app/service/location.service';
import {Location} from 'app/model/location'


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  locations: Location[];
  location: Location = new Location();
  constructor(private locationService : LocationService) { }

  ngOnInit() {
    this.findAll();
  }
  findAll() {
    this.locationService.findAll().subscribe(data => { this.locations = data });
  }
  // getOneLocation(id){
  //   this.userService.findOne(id).subscribe(data => )
  //}
  deleteLocation(location) {
    this.locationService.delete(location.idLocation).subscribe(
      () => { this.findAll() }
    );
  }

  save() {
    this.locationService.save(this.location).subscribe(
      ()=>{this.findAll();
      this.location = new Location();
      }
    )
  }
}

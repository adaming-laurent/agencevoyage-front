import { Component, OnInit } from '@angular/core';
import { Flight } from 'app/model/flight';
import { Journey } from 'app/model/journey';
import { RiverCruise } from 'app/model/riverCruise';
import { TrainRide } from 'app/model/trainRide';
import { FlightService } from 'app/service/flight.service';
import { JourneyService } from 'app/service/journey.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    journeys: Journey[];
    journey: Journey = new Journey();
    flights : Flight[];
    flight : Flight = new Flight();
    riverCruises : RiverCruise[];
    riverCruise : RiverCruise = new RiverCruise();
    trainRides : TrainRide[];
    trainRide : TrainRide = new TrainRide();

  constructor(private journeyService : JourneyService) { }


  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.journeyService.findAll().subscribe(data => { this.journeys = data });
  }
  deleteJourney(id:number) {
    console.log("id="+id);
    this.journeyService.delete(id).subscribe(
      () => { this.findAll() }
    );
  }
  saveJourney(){
    this.journeyService.save(this.journey).subscribe(()=>{this.findAll();
    this.journey = new Journey();
    });
  }

}

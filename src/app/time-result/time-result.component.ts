import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';
import { TimeSpent } from '../models/time-spent.model';

@Component({
  selector: 'va-time-result',
  templateUrl: './time-result.component.html',
  styleUrls: ['./time-result.component.css']
})
export class TimeResultComponent implements OnInit {

  constructor(private tmdbService: TmdbService) { }
  result: TimeSpent = new TimeSpent();

  ngOnInit(): void {
    if(!localStorage['netflix_data']){
      localStorage.setItem('netflix_data',JSON.stringify(""))
    }

    this.tmdbService.updateNetflixData();
  }
}

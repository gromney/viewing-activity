import { Component, OnInit } from '@angular/core';
import { TimeSpent } from '../models/time-spent.model';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'va-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: TimeSpent = new TimeSpent();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.loadedNetflixData.subscribe(d => {
      this.result = d.result();
    });
  }
}

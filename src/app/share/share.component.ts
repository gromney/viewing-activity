import { Component, OnInit } from '@angular/core';
import { TimeSpent } from '../models/time-spent.model';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'va-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  result: TimeSpent = new TimeSpent();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.loadedNetflixData.subscribe(d => {
      this.result = d.result();
    });
  }
 
}

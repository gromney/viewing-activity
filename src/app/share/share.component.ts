import { Component, OnInit } from '@angular/core';
import { TimeSpent } from '../models/time-spent.model';
import { TmdbService } from '../service/tmdb.service';
import { TvShowDetail } from '../models/tvshow-detail.model';
import { MovieDetail } from '../models/movie-detail.model';

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
  
      this.getTimeSpent(d);
    });
  }
  getTimeSpent(loadedData: { tvshows: TvShowDetail[], movies: MovieDetail[] } = { tvshows: [], movies: [] }) {
    let min = 0;
    loadedData.tvshows.map(x => {
      min += x.watched_episodes * x.episode_run_time.reduce((a, b) => a + b, 0);
    });

    loadedData.movies.map(x => {
      min += x.runtime;
    })


    this.result.days = Math.floor(min / 1440);
    this.result.hours = Math.floor((min - this.result.days * 1440) / 60);
    this.result.minutes = Math.floor(min - (this.result.days * 1440) - (this.result.hours * 60))
  }

}

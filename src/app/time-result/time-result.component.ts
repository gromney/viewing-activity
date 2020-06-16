import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';
import { MovieDetail } from '../models/movie-detail.model';
import { TvShowDetail } from '../models/tvshow-detail.model';
import { environment } from 'src/environments/environment';
import { TimeSpent } from '../models/time-spent.model';

@Component({
  selector: 'va-time-result',
  templateUrl: './time-result.component.html',
  styleUrls: ['./time-result.component.css']
})
export class TimeResultComponent implements OnInit {
  tvshows: TvShowDetail[] = [];
  movies: MovieDetail[] = [];

  imgBaseUrl = environment.tmdb.imageBaseUrl;

  constructor(private tmdbService: TmdbService) { }
  result: TimeSpent = new TimeSpent();

  ngOnInit(): void {

    this.tmdbService.loadedNetflixData.subscribe(d => {
      this.tvshows = d.tvshows;
      this.movies = d.movies;
      this.getTimeSpent(d);
    });
    
    if(!localStorage['netflix_data']){
      localStorage.setItem('netflix_data',JSON.stringify(""))
    }

    this.tmdbService.updateNetflixData();

  }

  onChange(files: FileList) {
    
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      
      let reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('netflix_data', JSON.stringify(reader.result));
      }

      reader.onloadend = () => {
        this.tmdbService.updateNetflixData();
      }

      reader.readAsText(file);

    }
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

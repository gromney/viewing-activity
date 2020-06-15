import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';
import { MovieDetail } from '../models/movie-detail.model';
import { TvShowDetail } from '../models/tvshow-detail.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'va-time-result',
  templateUrl: './time-result.component.html',
  styleUrls: ['./time-result.component.css']
})
export class TimeResultComponent implements OnInit {
  tvshows: TvShowDetail[] =[];
  movies: MovieDetail[]=[];

  imgBaseUrl = environment.tmdb.imageBaseUrl;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.loadedNetflixData.subscribe(d => {
      this.tvshows =d.tvshows
    });
    this.tmdbService.loadedNetflixData.subscribe(m => {
      this.movies = m.movies;
    })
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


}

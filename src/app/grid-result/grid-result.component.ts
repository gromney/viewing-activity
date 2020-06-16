import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../models/movie-detail.model';
import { TvShowDetail } from '../models/tvshow-detail.model';
import { environment } from 'src/environments/environment';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'va-grid-result',
  templateUrl: './grid-result.component.html',
  styleUrls: ['./grid-result.component.css']
})
export class GridResultComponent implements OnInit {
  tvshows: TvShowDetail[] = [];
  movies: MovieDetail[] = [];

  imgBaseUrl = environment.tmdb.imageBaseUrl;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.loadedNetflixData.subscribe(d => {
      this.tvshows = d.tvshows;
      this.movies = d.movies;
    });
  }

}

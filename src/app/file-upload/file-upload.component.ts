import { Component, OnInit } from '@angular/core';
import { TimeSpent } from '../models/time-spent.model';
import { TmdbService } from '../service/tmdb.service';
import { TvShowDetail } from '../models/tvshow-detail.model';
import { MovieDetail } from '../models/movie-detail.model';

@Component({
  selector: 'va-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  result: TimeSpent = new TimeSpent();

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    console.log(this.result);
    
    this.tmdbService.loadedNetflixData.subscribe(d => {
  
      this.getTimeSpent(d);
    });
  }

  onChange(files: FileList) {
    
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      
      let reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('netflix_data', JSON.stringify(reader.result));
        localStorage.setItem('files_name',file.name)
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
  onClearData() {
    localStorage.setItem('netflix_data',JSON.stringify(""));
    this.tmdbService.updateNetflixData();
  }

}

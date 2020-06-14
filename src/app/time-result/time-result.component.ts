import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'va-time-result',
  templateUrl: './time-result.component.html',
  styleUrls: ['./time-result.component.css']
})
export class TimeResultComponent implements OnInit {

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
  }

  onChange(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      const file = files[index];

      let reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('netflix_data', JSON.stringify(reader.result));
      }

      reader.onloadend = () => {
        this.tmdbService.csvToJson();
      }
      
      reader.readAsText(file);

    }
  }

}

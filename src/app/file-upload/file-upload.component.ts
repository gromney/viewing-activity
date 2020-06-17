import { Component, OnInit } from '@angular/core';
import { TimeSpent } from '../models/time-spent.model';
import { TmdbService } from '../service/tmdb.service';

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
      this.result = d.result();
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

  onClearData() {
    localStorage.setItem('netflix_data',JSON.stringify(""));
    this.tmdbService.updateNetflixData();
  }

}

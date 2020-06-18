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
  twitter_share_link: string;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.loadedNetflixData.subscribe(d => {
      if(d.result().hasResult()){
        this.twitter_share_link =`https://twitter.com/intent/tweet?text=https://viewing-activity.web.app/ 
          I'v spend ${d.result().days} days, ${d.result().hours} hours and ${d.result().minutes} minutes on Netflix. 
          @bautaBDS make this inspired by https://tiii.me/ to learn @angular`;
      }else {
        this.twitter_share_link = `https://twitter.com/intent/tweet?text=https://viewing-activity.web.app/ 
          Calculate your time wasted on Netflix.
          @bautaBDS make this inspired by https://tiii.me/ to learn @angular`;
      }
    });
  }
 
}

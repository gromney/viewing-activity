import { Injectable } from '@angular/core';

import { Papa } from 'ngx-papaparse';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { NetflixData } from '../models/NetflixData';

@Injectable({ providedIn: 'root' })
export class TmdbService {
    netflixData: NetflixData[];

    constructor(private papa: Papa) { }

    updateNetflixData() {
        const csv = JSON.parse(localStorage.getItem('netflix_data') || '[]');

        this.papa.parse(csv, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                this.jsonToNetflixData(result.data);
            }
        })
        
    }

    jsonToNetflixData(data: { Title: string, Date: string }[]) {
        let netflix_dat = from(data);
        this.netflixData = [] ;
        netflix_dat.pipe(
            map(x => {
                return new NetflixData(x.Title, x.Date);
            })
        ).subscribe(x => this.netflixData.push(x))
    }
}
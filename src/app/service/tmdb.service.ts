import { Injectable } from '@angular/core';

import { Papa } from 'ngx-papaparse';

@Injectable({providedIn: 'root'})
export class TmdbService {
    constructor(private papa: Papa) { }
    
    csvToJson() {
        const csv = JSON.parse(localStorage.getItem('netflix_data') || '[]');

        this.papa.parse(csv, {
            header:true,
            skipEmptyLines:true,
            complete: (result) => {
                console.log(result.data);
                
            }
        })
    }
}
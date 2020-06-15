import { timeStamp } from 'console';

export class NetflixData {
    Season: string;
    Episode: string;
    Type: string;
    
    constructor(public Title: string, public Date: string) {
        const splitedTitle = Title.split(':').map(x => x.trim());

        this.Title = splitedTitle[0];
        this.Season = splitedTitle[1];
        this.Episode = splitedTitle[2];
        this.Type = this.Episode != null ? 'TvShow' : 'Movie';
    }
}
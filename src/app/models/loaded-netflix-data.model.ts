import { MovieDetail } from './movie-detail.model';
import { TvShowDetail } from './tvshow-detail.model';
import { TimeSpent } from './time-spent.model';

export class LoadedNetflixData {
    tvshows: TvShowDetail[]= [];

    movies: MovieDetail[] = [];

    result() {
        let min = 0;
        this.tvshows.map(x => {
            min += x.watched_episodes * x.episode_run_time.reduce((a, b) => a + b, 0);
        });

        this.movies.map(x => {
            min += x.runtime;
        })

        let total = new TimeSpent()

        total.days = Math.floor(min / 1440);
        total.hours = Math.floor((min - total.days * 1440) / 60);
        total.minutes = Math.floor(min - (total.days * 1440) - (total.hours * 60))

        return total;
    }
}
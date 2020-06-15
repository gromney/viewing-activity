import { Movie } from './movie.model';

export interface TmdbMovieResponse {
    page:number;
    total_pages:number;
    results:Movie[];
    total_results:number;
}
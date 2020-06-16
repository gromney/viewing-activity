import { TvShow } from './tvshow.model';

export interface TmdbTvshowResponse {
    page:number;
    total_pages:number;
    results:TvShow[];
    total_results:number;
}
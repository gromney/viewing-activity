export class TvShowDetail {
    id?: number;
    poster_path?: string;
    backdrop_path?:string;
    episode_run_time?: number[];
    name?: string = '';
    original_name?: string;
    number_of_seasons?: number;
    number_of_episodes?: number = 0;
    watched_episodes?:number;
    generes?: { id: number, name: string }[];
  }
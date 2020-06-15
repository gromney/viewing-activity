export class MovieDetail {
    id: number;
    poster_path?: string;
    backdrop_path?: string;
    runtime: number;
    title: string;
    viewed_date:string;
    generes?: {
        id: number;
        name: string;
    }[];
}
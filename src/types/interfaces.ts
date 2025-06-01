export interface ICatalogCard {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
}

export interface DataCatalogResponse {
  loading: boolean;
  error: null | string;
  data: ICatalogCard[];
}

export interface ICardItem {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Country: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbID: string;
  BoxOffice: string;
  Production: string;
}

interface IRating {
  Source: string;
  Value: string;
}

export interface DataItemCardResponse {
  loading: boolean;
  error: null | string;
  data: ICardItem;
}

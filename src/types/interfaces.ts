export interface PostData {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
}

export interface DataResponse {
  loading: boolean;
  error: null | string;
  data: PostData[];
}

export interface MovieData {
  title: string
  releaseDate: Date
  posterPath: string
  voteAverage:number
  popularity?: number
  voteCount?: number
  overview?: string
  id?:number
}

export interface MovieDataToDetailst {
  title: string
  release_date: Date
  poster_path: string
  vote_average:number
  popularity?: number
  vote_count?: number
  overview?: string
  genres?: [{
    id: number
    name: string
  }]
}

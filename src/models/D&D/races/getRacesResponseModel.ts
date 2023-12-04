export interface GetRacesResponse {
  count: number;
  results: Races[];
}

interface Races {
  index: string;
  name: string;
  url: string;
}

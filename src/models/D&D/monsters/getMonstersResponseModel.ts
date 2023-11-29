interface GetMonstersResponse {
  count: number;
  results: MonstersResult[];
}

interface MonstersResult {
  index: string;
  name: string;
}

export interface DC {
  dc_type: DCType;
  dc_value: number;
  success_type: string;
}

interface DCType {
  index: string;
  name: string;
}

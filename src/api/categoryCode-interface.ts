import { ICommonReq } from "./common-interface";

export default interface ICategoryCode extends ICommonReq {
  contentTypeId?: 76 | 78 | 85 | 75 | 80 | 79 | 82 | 77;
  cat1?: string;
  cat2?: string;
  cat3?: string;
}

export interface ICategoryCodeItems {
  code: number;
  name: string;
  rnum: number;
}

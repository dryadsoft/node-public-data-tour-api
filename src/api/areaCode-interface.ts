import { ICommonReq } from "./common-interface";

export default interface IAreaCode extends ICommonReq {
  areaCode?: number;
}

export interface IAreaCodeItem {
  code: number;
  name: string;
  rnum: number;
}

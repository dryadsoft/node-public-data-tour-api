import { ICommonReq } from "./common-interface";

export default interface ISearchKeyword extends ICommonReq {
  arrange?: "O" | "P" | "Q" | "R" | "S";
  contentTypeId?: 76 | 78 | 85 | 75 | 80 | 79 | 82 | 77;
  areaCode?: number;
  sigunguCode?: number;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  keyword: string;
}

export interface ISearchKeywordItem {
  addr1: string;
  areacode: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  createdtime: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: number;
  mlevel: number;
  modifiedtime: number;
  readcount: number;
  sigungucode: number;
  tel: string;
  title: string;
}

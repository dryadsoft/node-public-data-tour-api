import { ICommonReq } from "./common-interface";

/**
 * eventStartDate: YYYYMMDD
 * eventEndDate: YYYYMMDD
 */
export default interface ISearchStay extends ICommonReq {
  arrange?: "O" | "P" | "Q" | "R" | "S";
  areaCode?: number;
  sigunguCode?: number;
  hanOk?: string;
  benikia?: string;
  goodStay?: string;
  modifiedtime?: number;
}

export interface ISearchStayItem {
  addr1: string;
  areacode: number;
  benikia: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  createdtime: number;
  firstimage: string;
  firstimage2: string;
  goodstay: number;
  hanok: number;
  mapx: number;
  mapy: number;
  mlevel: number;
  modifiedtime: number;
  readcount: number;
  sigungucode: number;
  tel: string;
  title: string;
}

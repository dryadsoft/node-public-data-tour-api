import { ICommonReq } from "./common-interface";

export default interface ILocationBasedList extends ICommonReq {
  arrange?: "O" | "P" | "Q" | "R" | "S";
  contentTypeId?: 76 | 78 | 85 | 75 | 80 | 79 | 82 | 77;
  mapX: number;
  mapY: number;
  radius: number;
  modifiedtime?: number;
}

export interface ILocationBasedListItem {
  addr1: string;
  areacode: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  createdtime: number;
  dist: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: number;
  masterid: number;
  mlevel: number;
  modifiedtime: number;
  readcount: number;
  sigungucode: number;
  tel: string;
  title: string;
}

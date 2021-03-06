import { ICommonReq } from "./common-interface";

export default interface IDetailCommon extends ICommonReq {
  contentId: number;
  contentTypeId?: 76 | 78 | 85 | 75 | 80 | 79 | 82 | 77;
  defaultYN?: "Y" | "N";
  firstImageYN?: "Y" | "N";
  areacodeYN?: "Y" | "N";
  catcodeYN?: "Y" | "N";
  addrinfoYN?: "Y" | "N";
  mapinfoYN?: "Y" | "N";
  overviewYN?: "Y" | "N";
  transGuideYN?: "Y" | "N";
}

export interface IDetailCommonItem {
  contentid: number;
  contenttypeid: number;
  masterid: string;
  booktour: string;
  createdtime: string;
  homepage: string;
  modifiedtime: string;
  tel: string;
  telname: string;
  title: string;
  firstimage: string;
  firstimage2: string;
  areacode: string;
  sigungucode: string;
  cat1: string;
  cat2: string;
  cat3: string;
  addr1: string;
  addr2: string;
  zipcode: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  overview: string;
  directions: string;
}

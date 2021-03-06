import { ICommonReq } from "./common-interface";

export default interface IDetailInfo extends ICommonReq {
  contentId: number;
  contentTypeId?: 76 | 78 | 85 | 75 | 79;
}

export interface IDetailInfoItem {
  contentid: number;
  contenttypeid: number;
  fldgubun: number;
  infoname: string;
  infotext: string;
  serialnum: number;
}

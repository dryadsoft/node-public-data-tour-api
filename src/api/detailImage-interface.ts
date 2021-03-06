import { ICommonReq } from "./common-interface";

export default interface IDetailImage extends ICommonReq {
  contentId: number;
  imageYN?: "Y" | "N";
  subImageYN?: "Y" | "N";
}

export interface IDetailImageItem {
  contentid: number;
  originimgurl: string;
  serialnum: string;
  smallimageurl: string;
}

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq";
    [key: string]: any;
  };
};

declare type CommodityType = "ordinary" | "buyOnce" | "bargain" | "giveaway";

declare interface ICommodityItem {
  _id: string;
  name: string;
  description: string;
  images: string[];
  fakeAmount: string;
  sales: number;
  restrictedPurchaseQuantity: number; //每次限购
  limitedPurchasePerPerson: number; //每人限购
  tags: string[];
  imgesDescrptionList: string[];
  type: CommodityType;
  strategyTags: string[];
  categoryId: string;
  skus: ISkuDto[];
  attributes: IAttributeDto[];
}

declare interface ISkuDto {
  _id: string;
  name: string;
  code: string;
  price: number;
  stock: number;
  isSufficient: boolean;
  combines: ISkuSpecificationDto[];
}

declare interface ISkuSpecificationDto {
  attributeId: string;
  specificationId: string;
}

declare interface IAttributeDto {
  _id: string;
  name: string;
  specifications: ISpecificationDto[];
}

declare interface ISpecificationDto {
  _id: string;
  name: string;
  icon: string;
}

declare interface IShoppingCartItem extends ICommodityItem {
  skuId: string;
  quantity: number;
  specifications: string;
  price: number;
}

declare interface ICategoryItem {
  _id: string;
  name: string;
}

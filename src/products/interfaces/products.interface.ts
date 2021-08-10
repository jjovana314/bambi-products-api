import { ForeignNames } from "./foreignNames.interface";
import { ProductClass } from "./productClass.interface";
import { Thumbnail } from "./thumbnail.interface";
import { Images } from "./images.interface";
import { LogisticsData } from "./logisticsData.interface";
import { CustomAttributes } from "./customAttributes.interface";

export class Products {
    _id?: String;
    id?: String;
    productCode?: String;
    productNane?: String;
    foreignNames?: ForeignNames[];
    productClass?: ProductClass;
    active?: Boolean;
    thumbnail?: Thumbnail;
    images?: Images[];
    unit?: String;
    eANCode?: String;
    eANPackageCode?: String;
    logisticData?: LogisticsData[];
    tags?: String[];
    customAttributes?: CustomAttributes[];
    likes?: Number;
    description?: String;
}
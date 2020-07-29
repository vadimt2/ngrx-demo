import { IPhoto } from "../interfaces/iphoto";

export class Photo implements IPhoto{
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}

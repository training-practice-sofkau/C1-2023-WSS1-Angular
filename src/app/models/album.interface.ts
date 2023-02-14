import { IArtist } from "./artist.interface";

export interface IAlbum{
    albumID:string;
    title:string;
    genre:string;
    yearRelease:number;
    totalSongs:number;
    artistDTO:IArtist;
    link?:string;
}
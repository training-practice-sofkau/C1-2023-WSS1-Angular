import { IAlbum } from "./album.interface"

export interface IArtist{
    artistID: string,
    name: string,
    country: string,
    enterprise: string,
    debutDate?: Date,
    type: string,
    albumsDTO?:IAlbum[],
    link?:string
}
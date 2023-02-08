import { IAlbum } from "../models/album.interface";

export const ALBUMS: IAlbum[] = [
    {
        id:1,
        title:'Thriller',
        genre:'pop',
        releaseDate:1982,
        numberOfSongs:13,
        artist:'Michael Jackson'
    },

    {
        id:2,
        title:'Back in Black',
        genre:'Hard Rock',
        releaseDate:1980,
        numberOfSongs:10,
        artist:'AC/DC',
        link:'https://vitrinarock.com/wp-content/uploads/2020/10/acdc-shot-in-the-dark.jpg.webp'
    },

    {
        id:3,
        title:'Hotel California',
        genre:'Rock',
        releaseDate:1976,
        numberOfSongs:9,
        artist:'Eagles'
    }
    ,
    {
        id:4,
        title:'Colores',
        genre:'Reggaeton',
        releaseDate:2019,
        numberOfSongs:14,
        artist:'JBalvin',
        link:'https://forbes.co/_next/image?url=https%3A%2F%2Fcdn.forbes.co%2F2020%2F01%2Fj-balvin-1569828372.67.2560x1440.jpg&w=1920&q=75'
    }
]
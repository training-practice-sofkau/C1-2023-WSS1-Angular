import { IArtist } from "../models/artist.interface";

export const ARTISTS: IArtist[] = [
    {
        id: 1,
        name: 'Bruno Mars',
        country: 'USA',
        age: 30,
        year_debut: 2004,
        total_albums: 12,
        link:'https://www.thestatesman.com/wp-content/uploads/2017/10/brunomars.jpg'   
    },
    {
        id: 2,
        name: 'Jessie Ware',
        country: 'UK',
        age: 38,
        year_debut: 2017,
        total_albums: 4
    },
    {
        id: 3,
        name: 'Maluma',
        country: 'Colombia',
        age: 35,
        year_debut: 2009,
        total_albums: 16
    }
]
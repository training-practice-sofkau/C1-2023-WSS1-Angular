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
    },
    {
        id: 4,
        name: 'Beret',
        country: 'España',
        age: 26,
        year_debut: 2013,
        total_albums: 5
    },
    {
        id: 5,
        name: 'Bizarrap',
        country: 'Argentina',
        age: 22,
        year_debut: 2016,
        total_albums: 2,
        link:'https://www.billboard.com/wp-content/uploads/2022/07/sound-bizarrap-billboard-2022-guido-adler-1548.jpg?w=942&h=623&crop=1'
    }
]
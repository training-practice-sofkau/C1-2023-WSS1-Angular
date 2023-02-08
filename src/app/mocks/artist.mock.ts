import { IArtist } from "../models/artist.interface";

export const ARTISTS: IArtist[] = [
    {
        id: 1,
        name: 'Amon Amarth',
        genre: "Death Metal",
        created: "1992-02-06",
        country: 'Sweden',
        albums: 12,
        img: "./assets/artists/amon-amarth.jpg"
    },
    {
        id: 2,
        name: 'Arch Enemy',
        genre: "Death Metal",
        created: "1995-05-02",
        country: 'Sweden',
        albums: 4,
        img: "./assets/artists/arch-enemy.jpg"
    },
    {
      id: 3,
      name: 'Iron Maiden',
      genre: "Heavy Metal",
      created: "1990-05-02",
      country: 'UK',
      albums: 8,
      img: "./assets/artists/iron-maiden.jpg"
    },
    {
      id: 4,
      name: 'Papa Roach',
      genre: "Rock",
      created: "1993-05-02",
      country: 'USA',
      albums: 13,
      img: "./assets/artists/papa-roach.jpg"
    },
    {
      id: 5,
      name: 'Paramore',
      genre: "Rock",
      created: "1990-08-22",
      country: 'UK',
      albums: 13,
      img: "./assets/artists/paramore.jpg"
    },
    {
      id: 6,
      name: 'Blink 182',
      genre: "Rock",
      created: "1996-11-12",
      country: 'USA',
      albums: 10,
      img: "./assets/artists/blink-182.jpg"
    },
    {
      id: 7,
      name: 'Gojira',
      genre: "Metal",
      created: "1997-02-16",
      country: 'France',
      albums: 13,
      img: "./assets/artists/gojira.jpg"
    },
    {
      id: 8,
      name: 'Trivium',
      genre: "Metal",
      created: "1994-08-12",
      country: 'Colombia',
      albums: 9,
      img: "./assets/artists/trivium.jpg"
    },
    {
      id: 9,
      name: 'Metallica',
      genre: "Trash",
      created: "1994-07-17",
      country: 'USA',
      albums: 9,
      img: "./assets/artists/metallica.jpg"
    },
    {
      id: 10,
      name: 'Slayer',
      genre: "Trash",
      created: "1889-11-12",
      country: 'USA',
      albums: 16,
      img: "./assets/artists/slayer.jpg"
    }
]

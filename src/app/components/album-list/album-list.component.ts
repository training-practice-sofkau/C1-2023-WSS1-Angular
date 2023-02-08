import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mocks';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  l_albums: IAlbum[] = [];
  pagination_albums: IAlbum[] = [];

  results: number = 0;

  param: string = '';

  currentPage: number = 1;

  rows: number = 3;

  ngOnInit(): void {
    this.l_albums = ALBUMS;
    this.pagination_albums = this.paginationList();
    this.results = this.l_albums.length;
  }

  onSearch(param: string, typeSearch: string) {
    this.l_albums = ALBUMS;
    let myfilter: string =
      Object.keys(this.l_albums[0]).find((pro) =>
        pro.toLocaleLowerCase().includes(typeSearch.toLocaleLowerCase())
      ) || '';
    let isNumber: boolean = false;
    this.l_albums = this.l_albums.filter((art) => {
      if (typeof art[myfilter as keyof IAlbum]?.valueOf() == 'number') {
        isNumber = true;
        if (param.length == 0) return art;
        return art[myfilter as keyof IAlbum]?.valueOf() == param;
      }
      return art[myfilter as keyof IAlbum]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(param.toLocaleLowerCase());
    });
    this.results = this.l_albums.length;
    if (this.results > 0) {
      this.l_albums.sort((a, b) =>
        (a[myfilter as keyof IAlbum]?.valueOf() || 1) >
        (b[myfilter as keyof IAlbum]?.valueOf() || 1)
          ? 1
          : -1
      );
    }
    if (isNumber) this.l_albums.reverse();
    this.currentPage = 1;
    this.pagination_albums = this.paginationList();
  }

  paginationList(): IAlbum[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.l_albums.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_albums = this.paginationList();
  }
}

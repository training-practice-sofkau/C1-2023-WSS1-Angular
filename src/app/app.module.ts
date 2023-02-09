import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListsContainerComponent } from './components/lists-container/lists-container.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArtistListMenuComponent } from './components/artist-list-menu/artist-list-menu.component';
import { AlbumListMenuComponent } from './components/album-list-menu/album-list-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    AlbumComponent,
    ArtistComponent,
    ListsContainerComponent,
    NotFoundComponent,
    HomePageComponent,
    ArtistListMenuComponent,
    AlbumListMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

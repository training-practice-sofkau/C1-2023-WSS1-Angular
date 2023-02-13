import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    HomeComponent,
    CreateArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

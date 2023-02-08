import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FatherComponent } from './components/test/father/father.component';
import { ChildComponent } from './components/test/child/child.component';
import { ListsContainerComponent } from './components/lists-container/lists-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    AlbumComponent,
    ArtistComponent,
    FatherComponent,
    ChildComponent,
    ListsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

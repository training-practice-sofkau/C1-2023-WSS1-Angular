import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';

const routes: Routes = [
  {
    path: "artist",
    component: ArtistListComponent
  },
  {
    path: "album",
    component: AlbumListComponent
  },
  {
    path: "add",
    component: CreateArtistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

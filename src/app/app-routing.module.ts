import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'artist',
    component: ArtistListComponent,
  },
  {
    path: 'album',
    component: AlbumListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

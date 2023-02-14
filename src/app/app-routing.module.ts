import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/forms/artist-form/artist-form.component';
import { ArtistPutComponent } from './components/artist-put/artist-put.component';
import { ArtistPutFormComponent } from './components/forms/artist-put-form/artist-put-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: WelcomeComponent,
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
    path: 'new/artist',
    component: ArtistFormComponent,
  },
  {
    path: 'update/artist',
    component: ArtistPutComponent,
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

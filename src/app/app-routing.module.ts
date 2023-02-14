import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent} from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArtistListMenuComponent } from './components/artist-list-menu/artist-list-menu.component';
import { AlbumListMenuComponent } from './components/album-list-menu/album-list-menu.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ArtistPutComponent } from './components/artistCRUD/artist-put/artist-put.component';
import { ArtistFormPostComponent } from './components/artistCRUD/artist-form-post/artist-form-post.component';
import { ArtistDeleteComponent } from './components/artistCRUD/artist-delete/artist-delete.component';
import { AlbumFormPostComponent } from './components/albumCRUD/album-form-post/album-form-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  {
    path: 'home',
    component: WelcomeComponent,
/*      children: [
      {
        path: 'artist',
        component: ArtistListMenuComponent
      },
      {
        path: 'album',
        component: AlbumListMenuComponent
      }
    ] */
  },
  {
    path: 'artist',
    component: ArtistListMenuComponent
  },
  {
    path: 'artist/put',
    component: ArtistPutComponent
  },
  {
    path: 'artist/post',
    component: ArtistFormPostComponent
  },
  {
    path: 'artist/delete',
    component: ArtistDeleteComponent
  },
  {
    path: 'album',
    component: AlbumListMenuComponent
  },
  {
    path: 'album/put',
    component: AlbumFormPostComponent
  },
  {
    path: 'album/post',
    component: AlbumFormPostComponent
  },
  {
    path: 'album/delete',
    component: ArtistDeleteComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent} from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArtistListMenuComponent } from './components/artist-list-menu/artist-list-menu.component';
import { AlbumListMenuComponent } from './components/album-list-menu/album-list-menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  {
    path: 'home',
    component: HomePageComponent,
     children: [
      {
        path: 'artist',
        component: ArtistListMenuComponent
      },
      {
        path: 'album',
        component: AlbumListMenuComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  /*{
    path: 'artist',
    component: HomePageComponent,
    component: ArtistListComponent
  },
  {
    path: 'album',
    component: AlbumListComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

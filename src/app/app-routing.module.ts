import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';


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
        component: ArtistListComponent
      },
      {
        path: 'album',
        component: AlbumListComponent
      }

    ]
  },
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

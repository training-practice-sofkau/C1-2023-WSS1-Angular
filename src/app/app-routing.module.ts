import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/forms/artist-form/artist-form.component';
import { ArtistUpdateComponent } from './components/forms/update/update.component';
import { HomePageComponent } from './models/home-page/home-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
const routes: Routes = [

  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'artist',
    component: ArtistListComponent
  },
  {
    path: 'album',
    component: AlbumListComponent
  },
  {
    path: 'new/artist',
    component: ArtistFormComponent
  },
  {
    path: 'update/artist',
    component: ArtistUpdateComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ArtistFormComponent } from './components/forms/artist-form/artist-form.component';
import { UpdateArtistFormComponent } from './components/forms/update-artist-form/update-artist-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'artists', component: ArtistListComponent },
    {path: 'albums', component: AlbumListComponent },
    {path: "new/artist", component: ArtistFormComponent},
    {path: 'update/:id', component: UpdateArtistFormComponent},
    {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

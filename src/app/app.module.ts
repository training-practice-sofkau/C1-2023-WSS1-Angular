import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ListsContainerComponent } from './components/lists-container/lists-container.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ArtistListMenuComponent } from './components/artist-list-menu/artist-list-menu.component';
import { AlbumListMenuComponent } from './components/album-list-menu/album-list-menu.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ArtistPutComponent } from './components/artistCRUD/artist-put/artist-put.component';
import { ArtistPostComponent } from './components/artistCRUD/artist-post/artist-post.component';
import { ArtistFormComponent } from './components/artistCRUD/artist-form/artist-form.component';
import { ArtistFormPutComponent } from './components/artistCRUD/artist-form-put/artist-form-put.component';
import { ArtistFormPostComponent } from './components/artistCRUD/artist-form-post/artist-form-post.component';
import { ArtistDeleteComponent } from './components/artistCRUD/artist-delete/artist-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    AlbumComponent,
    ArtistComponent,
    ListsContainerComponent,
    NotFoundComponent,
    HomePageComponent,
    ArtistListMenuComponent,
    AlbumListMenuComponent,
    SideNavbarComponent,
    WelcomeComponent,
    ArtistPutComponent,
    ArtistPostComponent,
    ArtistFormComponent,
    ArtistFormPutComponent,
    ArtistFormPostComponent,
    ArtistDeleteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

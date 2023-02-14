import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ArtistFormComponent } from './components/forms/artist-form/artist-form.component';
import { ArtistPutComponent } from './components/artist-put/artist-put.component';
import { ArtistPutFormComponent } from './components/forms/artist-put-form/artist-put-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    HomePageComponent,
    NotFoundComponent,
    SidenavbarComponent,
    WelcomeComponent,
    ArtistFormComponent,
    ArtistPutComponent,
    ArtistPutFormComponent,
  ],
  imports: [
    MatSelectModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

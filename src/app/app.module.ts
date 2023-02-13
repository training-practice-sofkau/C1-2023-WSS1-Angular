import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from './app.component';
import {ArtistListComponent} from './components/artist-list/artist-list.component';
import {AlbumListComponent} from './components/album-list/album-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './models/home-page/home-page.component';
import {SidenavbarComponent} from './components/sidenavbar/sidenavbar.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {ArtistFormComponent} from './components/forms/artist-form/artist-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    AlbumListComponent,
    HomePageComponent,
    SidenavbarComponent,
    WelcomeComponent,
    ArtistFormComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

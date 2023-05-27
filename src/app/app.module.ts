import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WedoComponent } from './wedo/wedo.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProcessComponent } from './process/process.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { WhereComponent } from './where/where.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WedoComponent,
    AboutComponent,
    ServicesComponent,
    ProcessComponent,
    GalleryComponent,
    ContactComponent,
    WhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

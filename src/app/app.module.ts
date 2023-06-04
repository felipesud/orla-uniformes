import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MapComponent } from './shared/map/map.component';
import { FormComponent } from './shared/form/form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WppButtonComponent } from './shared/wpp-button/wpp-button.component';
import { GoogleWidgetComponent } from './shared/google-widget/google-widget.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    BannerComponent,
    MapComponent,
    FormComponent,
    FooterComponent,
    WppButtonComponent,
    GoogleWidgetComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }

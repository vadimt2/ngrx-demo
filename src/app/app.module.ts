import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './root-store/root-store.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotosModule } from './photos/photos.module';
import { PhotoService } from './services/index';
import { HomeComponent } from './components/index';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './components/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    RootStoreModule,
    PhotosModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

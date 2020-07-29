import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogPhotoComponent } from './dialog-photo/dialog-photo.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PhotoComponent, PhotosComponent, DialogPhotoComponent, AddPhotoComponent, EditPhotoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule
 
  ],
  exports: [PhotoComponent, PhotosComponent, AddPhotoComponent, EditPhotoComponent], 
})
export class PhotosModule { }

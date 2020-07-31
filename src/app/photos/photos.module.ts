import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos.component';
import { DialogPhotoComponent } from './dialog-photo/dialog-photo.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [PhotoComponent, PhotosComponent, DialogPhotoComponent, AddPhotoComponent, EditPhotoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
 
  ],
  exports: [PhotoComponent, PhotosComponent, AddPhotoComponent, EditPhotoComponent], 
})
export class PhotosModule { }

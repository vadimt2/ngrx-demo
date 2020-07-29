import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PhotosStoreModule } from './photos-feature-store/photos-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotosStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { photoReducer, PhotoStoreEffects } from '.';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('photos', photoReducer),
    EffectsModule.forFeature([PhotoStoreEffects])
  ]
})
export class PhotosStoreModule { }

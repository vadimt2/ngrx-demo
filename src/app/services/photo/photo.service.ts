import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from, Subject } from 'rxjs';
import {IPhoto} from '../../interfaces/iphoto'
import {environment, endPoint} from '../../../environments/environment'
import { Store } from '@ngrx/store';
import { AddPhoto, RemovePhoto, UpdatePhoto } from '../../root-store/photos-feature-store/actions';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient:HttpClient,private store: Store<{ photos: IPhoto[] }> ) { }

  @Output() updatePhotoEmitter = new EventEmitter<any>()

  public getPhotos():Observable<IPhoto[]>{
    return this.httpClient.get<IPhoto[]>(`${environment.apiUerl}${endPoint.photos}`);
  }

  public addPhoto(photo:IPhoto){
    this.store.dispatch(new AddPhoto(photo));
  }

  public updatePhoto(photo:IPhoto){
    this.store.dispatch(new UpdatePhoto(photo));
    this.updatePhotoEmitter.emit(null);
  }

  public deletePhoto(photo:IPhoto){
    this.store.dispatch(new RemovePhoto(photo));
  }
}

import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from, Subject } from 'rxjs';
import {IPhoto} from '../../interfaces/iphoto'
import {environment, endPoint} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient:HttpClient) { }

  public editPhoto = new Subject();

  public getPhotos():Observable<IPhoto[]>{
    return this.httpClient.get<IPhoto[]>(`${environment.apiUerl}${endPoint.photos}`);
  }



}

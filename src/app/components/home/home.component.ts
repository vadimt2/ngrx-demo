import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IPhoto } from '../../interfaces';
import { PhotoService } from '../../services';
import { Observable } from 'rxjs';
import { GetPhotos } from 'src/app/root-store/photos-feature-store/actions';
import {
  RootStoreState,
  PhotoStoreActions,
  PhotoStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>){
    this.photos$ = this.store$.select(
      PhotoStoreSelectors.selectPhotos
    );
  }

  public photos:IPhoto[] = [];
  // loading:boolean = true;
  public photos$: Observable<IPhoto[]>;
  public error$: Observable<string>;
  public isLoading$: Observable<boolean>;
  public editPhoto:boolean;
  

  // ngOnInit(): void {
  //   this.store.pipe(select('photos')).subscribe((data: any)=> {
  //     console.log(data);
  //     this.photos = data.photos
  //   });
  //   this.store.dispatch(new GetPhotos());
  //   // this.store.dispatch(new LoadSuccessAction());
  //   // this.photoServie.getPhotos().subscribe(data => (this.photos = data as any))
  // }

  ngOnInit() {
    // this.photos$ = this.store$.select(
    //   PhotoStoreSelectors.selectPhotos
    // );

    this.error$ = this.store$.select(
      PhotoStoreSelectors.selectPhotosError
    );

    this.isLoading$ = this.store$.select(
      PhotoStoreSelectors.selectPhotosIsLoading
    );

    this.store$.dispatch(new PhotoStoreActions.LoadRequestAction());
  }




}

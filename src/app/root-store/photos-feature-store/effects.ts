
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { PhotoService } from '../../services';
import { Action } from '@ngrx/store';
import { IPhoto } from 'src/app/interfaces';

@Injectable()
export class PhotoStoreEffects {
  constructor(
    private actions$: Actions,
    private photoService: PhotoService
  ) {}
  
  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.photoService
        .getPhotos()
        .pipe(
          map(
            photos =>
              { 
                // console.log(photos)
                return new featureActions.LoadSuccessAction(
                photos
              )
              }
            ),
            catchError(error =>
              observableOf(new featureActions.LoadFailureAction({ error }))
            )
      	)
     )
  );
}
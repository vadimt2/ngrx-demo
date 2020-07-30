import { Action } from '@ngrx/store';
import { IPhoto } from '../../interfaces/iphoto'

export enum ActionTypes {
  ADD_PHOTO = '[Photo] Add to photos',
  REMOVE_PHOTO = '[Photo] Remove from photos',
  UPDATE_PHOTO = '[Photo] Update from photos',
  LOAD_PHOTOS = '[Photo] Load Photos from server',
  LOAD_REQUEST = '[Photo] Load Request',
  LOAD_FAILURE = '[Photo] Load Failure',
  LOAD_SUCCESS = '[Photo] Load Success'
}


export class AddPhoto implements Action {
  readonly type = ActionTypes.ADD_PHOTO;

  constructor(public payload: IPhoto) {}
}

export class GetPhotos implements Action {
  readonly type = ActionTypes.LOAD_PHOTOS;
}

export class RemovePhoto implements Action {
  readonly type = ActionTypes.REMOVE_PHOTO;

  constructor(public payload: IPhoto) {}
}

export class UpdatePhoto implements Action {
  readonly type = ActionTypes.UPDATE_PHOTO;

  constructor(public payload: IPhoto) {}
}
export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: IPhoto[] ) {}
}

export type Actions = AddPhoto | RemovePhoto | GetPhotos | UpdatePhoto
 | LoadFailureAction | LoadSuccessAction | LoadRequestAction;
import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import { IPhoto } from '../../interfaces/iphoto'
  
  import { State } from './state';
  
  const getError = (state: State): any => state.error;
  
  const getIsLoading = (state: State): boolean => state.isLoading;
  
  const getPhotos = (state: State): any => state.photos;
  
  export const selectPhotoState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('photos');
  
  export const selectPhotosError: MemoizedSelector<
    object,
    any
  > = createSelector(
    selectPhotoState,
    getError
  );
  
  export const selectPhotosIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(
    selectPhotoState,
    getIsLoading
  );
  
  export const selectPhotos: MemoizedSelector<
    object,
    IPhoto[]
  > = createSelector(
    selectPhotoState,
    getPhotos
  );
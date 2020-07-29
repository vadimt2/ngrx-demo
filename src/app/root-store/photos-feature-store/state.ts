import { IPhoto } from '../../interfaces/iphoto';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const featureAdapter: EntityAdapter<
IPhoto
> = createEntityAdapter<IPhoto>({
  selectId: model => model.id,
  sortComparer: (a: IPhoto, b: IPhoto): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<IPhoto> {
  isLoading?: boolean;
  error?: any;
  photos: any[];
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    photos: []
  }
);
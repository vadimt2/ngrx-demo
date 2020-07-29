import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';
    
// export const initialState = {
//   photos: [],
// };

export function photoReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        photos: [...state.photos, action.payload]
      };

    case ActionTypes.REMOVE:
      return {
        ...state,
        photos: [...state.photos.filter(photo => photo.id !== action.payload.id)]
      };case ActionTypes.LOAD_REQUEST: {
        return {
          ...state,
          isLoading: true,
          error: null
        };
      }
      case ActionTypes.LOAD_SUCCESS: {
        return {
          ...state,
          photos: [...action.payload],
          isLoading: false,
          error: null
        };
      }
      case ActionTypes.LOAD_FAILURE: {
        return {
          ...state,
          isLoading: false,
          error: action.payload.error
        };
      }
      default: {
        return state;
      }
    }
  }
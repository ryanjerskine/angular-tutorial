import { FeatureOneActionTypes, FeatureOneActions } from './feature-one.actions';
import { FormOne } from './../components/form-one/form-one';

// State for this feature (Product)
export interface FeatureOneState {
  formOne: FormOne;
}

const initialState: FeatureOneState = {
  formOne: null
};

export function reducer(state = initialState, action: FeatureOneActions): FeatureOneState {

  switch (action.type) {
    case FeatureOneActionTypes.FormOneUpdated:
      return {
        ...state,
        formOne: action.payload
      };

    case FeatureOneActionTypes.OtherAction:
      return {
        ...state,
        // TODO: Implement more action types
      };

    default:
      return state;
  }
}
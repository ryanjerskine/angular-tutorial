import { FormOne } from './../components/form-one/form-one';
import { Action } from '@ngrx/store';

// Action enum
export enum FeatureOneActionTypes {
  FormOneUpdated = '[Feature One] Component One Form Updated',
  OtherAction = '[Feature One] Other Action'
}

// Action Creators
export class FormOneUpdated implements Action {
  readonly type = FeatureOneActionTypes.FormOneUpdated;

  constructor(public payload: FormOne) { }
}
export class OtherAction implements Action {
  readonly type = FeatureOneActionTypes.OtherAction;

  constructor(public payload: string) { }
}

// Union the valid types
export type FeatureOneActions = FormOneUpdated | OtherAction;
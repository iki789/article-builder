import * as ActionTypes from '../actions/actionTypes';
import { ICol } from '../../containers/Preview/Preview';

const initialState:IAppState = {
  showModal: false
}

const Reducer = (state: IAppState = initialState, action:{type: string, payload: any}) => {
  if(action.type === ActionTypes.HIDE_MODAL){
    state = {
      ...state,
      showModal: false
    }
  }

  if(action.type === ActionTypes.SHOW_MODAL){
    state = {
      ...state,
      showModal: true
    }
  }

  if(action.type === ActionTypes.ACTIVATE_COL){
    state = {
      ...state,
      activeCol: action.payload
    }
  }

  if(action.type === ActionTypes.UPDATE_COL){
    state = {
      ...state,
      activeCol: action.payload
    }
  }

  if(action.type === ActionTypes.UNSET_COL){
    state = {
      ...state,
      activeCol: undefined
    }
  }

  return state;
}


export interface IAppState{
  showModal: boolean,
  activeCol?: ICol
}

export default Reducer;
export { PreviewReducer } from '../../containers/Preview/store/reducer';
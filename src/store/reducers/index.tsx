import * as ActionTypes from '../actions/actionTypes';

const initialState:IAppState = {
  showModal: false
}

const Reducer = (state = initialState, action:{type: string, payload: any}) => {
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

  return state;
}


export interface IAppState{
  showModal: boolean
}

export default Reducer;
export { PreviewReducer } from '../../containers/Preview/store/reducer';
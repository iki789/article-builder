const initialState = {
  fonts: 'sabo'
}

const Reducer = (state = initialState, action:{type: string, payload: any}) => {
  if(action.type){return state;}
  return state;
}

export default Reducer;
export { PreviewReducer } from '../../containers/Preview/store/reducer';
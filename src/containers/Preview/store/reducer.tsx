import { Reducer } from 'redux';
import * as ActionTypes from './actionTypes';
import randomArtical from '../mocks/mocks';
import { IPreviewState, IRow, ICol } from '../Preview';

const initialState: IPreviewState = {
 ...randomArtical
}

export const PreviewReducer:Reducer = (state:IPreviewState = initialState, action) => {
  if(action.type === ActionTypes.ADD_ITEM_TO_ROW){
    let data:any = "";
    if(action.payload === 'text'){
      data = "<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Etiam suscipit sollicitudin libero, sit amet ullamcorper orci pretium quis. Aenean ornare finibus lectus in elementum. Quisque eget vehicula est. Integer nec tellus egestas, bibendum sem auctor, fermentum enim. Sed ac massa vehicula lorem malesuada porttitor.  fermentum enim. Sed ac massa vehicula lorem malesuada porttitor.</p>";
    }
    if(action.payload === 'image'){
      data = {
        src: ''
      }
    }
    if(action.payload === 'button'){
      data = {
        label: 'Button',
        type: 'default'
      }
    }
    if(action.payload === 'video'){
      data = {
        src: ''
      }
    }
    
    if(action.payload === 'embed'){
      data = {
        code: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
    }

    state = {
      ...state,
      rows:[
        ...state.rows,
        {cols: [{id: state.colCount+1, type:action.payload, data }]}
      ],
      colCount: state.colCount+1  
    };
  }
  
  if(action.type === ActionTypes.UPDATE_COL){
    const rows:IRow[] = [...state.rows];
    rows.map((row:IRow) => {
      row.cols.map((col:ICol)=>{
        if((col && action.payload) && col.id === action.payload.id) {col.data = action.payload.data;}
        return col;
      })
      return row;
    })
    state = {
      ...state,
      rows  
    };
  }

  if(action.type === ActionTypes.UPDATE_FONTS){
    state = {
      ...state,
      settings:{
        ...state.settings,
        fonts: action.payload
      }
    }
  }

  if(action.type === ActionTypes.UPDATE_MARGINS){
    state = {
      ...state,
      settings:{
        ...state.settings,
        margins: action.payload
      }
    }
  }

  if(action.type === ActionTypes.REMOVE_COL){
    let rows: IRow[] = [...state.rows];
    rows = rows.filter((row: IRow) => {
      row.cols = row.cols.filter((col: ICol)=>{
        return col.id !== action.payload.id
      })
      return row.cols.length > 0 ? true : false ;
    })

    state = {
      ...state,
      rows
    }
  }

  if(action.type === ActionTypes.UPDATE_THEME){
    state = {
      ...state,
      settings:{
        ...state.settings,
        theme: action.payload.color
      }
    }
  }

  return state;
}
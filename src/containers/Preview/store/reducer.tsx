import { Reducer } from 'redux';
import * as ActionTypes from './actionTypes';

import { IPreviewState, IRow, ICol } from '../Preview';

const initialState: IPreviewState = {
  settings:{
    fonts:{
      color: '#333',
      family:'asd',
      size: 1.2
    },
    margins:{
      bottom: 1.2,
      left: 1.2,
      right: 1.2,
      top: 1.2
    },
    theme: 'string'
  },
  rows:[
    {
      cols:[
        {id: 0, type: 'text', data:'<h1>Hello World</h1>'}
      ]
    }
  ],
  colCount: 0
}

export const PreviewReducer:Reducer = (state:IPreviewState = initialState, action) => {
  if(action.type === ActionTypes.ADD_ITEM_TO_ROW){
    state = {
      ...state,
      rows:[
        ...state.rows,
        {cols: [{id: state.colCount+1, type:action.payload, data: '<div>New Item</div>'}]}
      ],
      colCount: state.colCount+1  
    };
  }
  
  if(action.type === ActionTypes.UPDATE_COL){
    const rows:IRow[] = [...state.rows];
    rows.map((row:IRow) => {
      row.cols.map((col:ICol)=>{
        if(col.id === action.payload.id) {col.data = action.payload.data;}
        return col;
      })
      return row;
    })
    state = {
      ...state,
      rows  
    };
  }

  return state;
}
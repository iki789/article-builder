import * as React from 'react';
import { Reducer } from 'redux';

import { IPreviewState } from '../Preview';

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
        {id: 0, type: 'text', data:<h1>Hello world!</h1>}
      ]
    }
  ],
  colCount: 0
}

export const PreviewReducer:Reducer = (state = initialState, action) => {
  if(action.type === "ADD_ITEM_TO_ROW"){
    state = {
      ...state,
      rows:[
        ...state.rows,
        {cols: [{id: state.colCount+1, type:action.payload, data: 'asd'}]}
      ],
      colCount: state.colCount+1  
    };
  }
  return state;
}
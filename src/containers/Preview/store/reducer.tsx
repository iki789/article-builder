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
        {id: 1, type: 'text', data:<h1>Hello world!</h1>}
      ]
    }
  ]
}

export const PreviewReducer:Reducer = (state = initialState, action) => {
  return state;
}
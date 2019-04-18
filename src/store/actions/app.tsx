import * as actionTypes from './actionTypes';
import { ICol } from 'src/containers/Preview/Preview';

export const HIDE_MODAL = () => {
  return {
    type: actionTypes.HIDE_MODAL
  }
}

export const SHOW_MODAL = () => {
  return {
    type: actionTypes.SHOW_MODAL
  }
}

export const ACTIVATE_COL = (data: ICol) => {
  return {
    type: actionTypes.ACTIVATE_COL, payload: data
  }
}

export const UPDATE_COL = (data: ICol) => {
  return {
    type: actionTypes.UPDATE_COL, payload: data
  }
}
import * as ActionTypes from "./actionTypes";
import { ICol } from "../Preview";
import { IFonts } from "../../../components/Settings/Fonts/Fonts";
import { IMargins } from "src/components/Settings/Margins/Margins";

export const ADD_ITEM_TO_ROW = (item: string) => {
  return {
    type: ActionTypes.ADD_ITEM_TO_ROW,
    payload: item,
  };
};

export const UPDATE_COL = (col: ICol) => {
  return {
    type: ActionTypes.UPDATE_COL,
    payload: col,
  };
};

export const UPDATE_FONTS = (fonts: IFonts) => {
  return {
    type: ActionTypes.UPDATE_FONTS,
    payload: fonts,
  };
};

export const UPDATE_MARGINS = (margins: IMargins) => {
  return {
    type: ActionTypes.UPDATE_MARGINS,
    payload: margins,
  };
};

export const REMOVE_COL = (id: number) => {
  return {
    type: ActionTypes.REMOVE_COL,
    payload: { id },
  };
};

export const UPDATE_THEME = (color: string) => {
  return {
    type: ActionTypes.UPDATE_THEME,
    payload: { color },
  };
};

export const CLEAR_ROWS = () => ({
  type: ActionTypes.CLEAR_ROWS,
});

import { API } from "../../service/api";
import { actionCreator } from "./actionCreator";
export const SET_DATA = "SET_DATA";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const setDataAction = (data) => actionCreator(SET_DATA, data);
export const getCategoriesAction = (categories) =>
  actionCreator(GET_CATEGORIES, categories);

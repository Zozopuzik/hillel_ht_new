import { actionCreator } from "./actionCreator"

export const SET_USER_DATA = 'SET_USER_DATA'
export const ADD_IDS_TO_CART = 'ADD_IDS_TO_CART'
export const REMOVE_IDS_FROM_CART = 'REMOVE_IDS_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

export const setUserDataAction = (data) => actionCreator(SET_USER_DATA, data)

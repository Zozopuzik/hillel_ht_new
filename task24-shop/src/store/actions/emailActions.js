import { actionCreator } from "./actionCreator"


export const SET_EMAILS = 'SET_EMAILS'

export const setEmailAction = (data) => actionCreator(SET_EMAILS, data)

import { API } from "../../service/api"
import { setEmailAction } from "./emailActions"
import { setDataAction,  getCategoriesAction} from "./productActions"
import { setUserDataAction } from "./userActions"

export const getDataThunk = () =>{
    return async (dispatch) => {
        await API.getProducts('https://634e9f834af5fdff3a625f84.mockapi.io/products')
        .then((res) => {
            console.log(res)
          dispatch(setDataAction(res.data))
          dispatch(getCategoriesAction(res.data))
        })
    }
}
export const setEmailsThunk = () => {
    let emails = []
    return async (dispatch) => {
        await API.getUsers('https://634e9f834af5fdff3a625f84.mockapi.io/users')
        .then((res) => {

            console.log(res)
            res.data.forEach(element => {
                emails.push(element.email)
            });
            dispatch(setEmailAction(emails))
        })
    }
}
export const setUserThunk = (dataToPost) =>{
    return async (dispatch) => {
    await API.addUser(
        "https://634e9f834af5fdff3a625f84.mockapi.io/users",
        dataToPost
      ).then((res) => {
        dispatch(setUserDataAction(res.data));
      });
    }
}
import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import MainPage from './components/MainPage';
import { API } from './service/api';
import {LocalStorage} from './service/localStorage'
import { getDataThunk, setEmailsThunk } from './store/actions/asyncActions';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataThunk())
    dispatch(setEmailsThunk())
  }, [])
  useEffect(() => {
    let data = LocalStorage.getItemFromLocalSorage('userData')
     console.log(data)
     if(data !== null){
      dispatch({type: 'SET_USER_DATA', payload:data})
      data.shoppingCart.forEach(element => {
        dispatch({type: 'ADD_IDS_TO_CART', payload: element.id})
       });
     }  
  }, [])
  
  
  return (
    <div className="App">
    <Routes>
    <Route path='/' element = {<MainPage   />}/>
    <Route path='logIn' element = {<LogIn />}/>
   </Routes>

    </div>
  );
}

export default App;

import React from 'react'
import {  Scene, Reducer,Router,Switch,Modal,Actions,ActionConst } from 'react-native-router-flux';

const initialState = {
  loggedIn: null,
  isFetching: false,
}  

const reducerCreate = (params) => {

    const defaultReducer = Reducer(params)

    return (state, action) => {
      if (action.type === ActionConst.FOCUS) {
        console.log('Inside reducer');
      }

      return defaultReducer(state, action) 
    }
  }

export default reducerCreate
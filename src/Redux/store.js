import {configureStore} from '@reduxjs/toolkit'
import postReducer from './features/postSlice'

const store = configureStore({
   reducer :{
       postdata : postReducer,
   }
})


export default store;
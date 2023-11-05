import { configureStore, combineReducers } from '@reduxjs/toolkit'

import thunk from "redux-thunk"
import {userReducer} from './user/reduceruser'
import {postReducer,detailReducer} from "./post/reducer"
import {searchReducer,deleteReducer} from "./search/seareducer"
import {imgReducer} from './images/action'

const rootreducer = combineReducers({
  user:userReducer,
  post:postReducer,
  search:searchReducer,
  images:imgReducer,
  details:detailReducer,
  deletesuccess:deleteReducer,
})

export const store = configureStore({
  reducer:rootreducer,
  middleware:[thunk]
});


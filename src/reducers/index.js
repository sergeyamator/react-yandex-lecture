import { combineReducers } from 'redux'
import lectures from './lectures';
import teachers from './teachers';
import rooms from './rooms';

const rootReducer = combineReducers({
  lectures,
  teachers,
  rooms
});

export default rootReducer

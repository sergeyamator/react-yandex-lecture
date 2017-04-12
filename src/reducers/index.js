import { combineReducers } from 'redux'
import lectures from './lectures';
import teachers from './teachers';
import rooms from './rooms';
import schools from './schools';

const rootReducer = combineReducers({
  lectures,
  teachers,
  rooms,
  schools
});

export default rootReducer

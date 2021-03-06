import { combineReducers } from 'redux'
import lectures from './lectures';
import teachers from './teachers';
import rooms from './rooms';
import schools from './schools';
import lecturesForm from './lecturesForm';

const rootReducer = combineReducers({
  lectures,
  teachers,
  rooms,
  schools,
  lecturesForm
});

export default rootReducer

import { combineReducers } from 'redux'
import lectures from './lectures';
import teachers from './teachers';

const rootReducer = combineReducers({
  lectures,
  teachers
});

export default rootReducer

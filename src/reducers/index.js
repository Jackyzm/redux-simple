import { combineReducers } from '../redux';
import count from './count';
import num from './num';

export default combineReducers({
    count,
    num
});
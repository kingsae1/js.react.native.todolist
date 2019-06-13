import {combineReducers} from 'redux';
import Reducer from './Reducer';

// 리듀서 인터페이스 정의
export default combineReducers({ todos: Reducer });
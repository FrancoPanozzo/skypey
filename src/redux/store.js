import { createStore } from 'redux';
import reducer from './reducers';
import { contacts } from '../constants/static-data';

export default createStore(reducer, { contacts });

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {combineReducers, createStore} from 'redux';
import reducerstate from "./components/Redux/Reducer";
import activeReducer from "./components/Redux2/Reducer2";
import nameMgtReducer from "./components/NameAdd/NameMgtReducer";
import {Provider} from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";

  const rootReducer = combineReducers({
      red1: reducerstate,
      red2: activeReducer,
      naad: nameMgtReducer
  })

 //rootReducer = reducerstate;
let store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
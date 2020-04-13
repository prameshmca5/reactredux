import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import Reducer from "./components/Redux/Reducer";
import {Provider} from "react-redux"

let store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
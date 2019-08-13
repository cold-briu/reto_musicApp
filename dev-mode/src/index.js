import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';


import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-social/materialize-social.css';



import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));





























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

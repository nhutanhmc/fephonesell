 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './animations.css';
import './header-effects.css';
import './home-effects.css';
import './product-detail-effects.css';
import './scroll-effects.css';
import './loading-animations.css';
import './auth-forms.css';
import './cart-styling.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from "./contexts/MyProvider";

class App extends Component {
  render() {
    return (
         <MyProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}

 export default App;

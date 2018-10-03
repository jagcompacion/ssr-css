import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import App from '../components/app'


// Always use this condition to prevent stlye from loading
// while performing SSR
// More information on this -> https://github.com/webpack-contrib/style-loader/issues/109


if (!SSR) {
  require('../../assets/style.css')
}


export default function render(initialState) {
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState()

  return {content, preloadedState};
};

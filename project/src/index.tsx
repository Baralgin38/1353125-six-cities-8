import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';
import {city} from './mocks/city';

const PLACE_COUNT = 5;

ReactDOM.render(
  <React.StrictMode>
    <App
      placeCount = {PLACE_COUNT}
      offers = {offers}
      comments = {comments}
      city = {city}
    />
  </React.StrictMode>,
  document.getElementById('root'));

'use strict';
const config = require('./config');
const URL = config.URL;
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function fetchURL(URL) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = () => {
      if (200 <= req.status && req.status < 300) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

fetchURL(URL)
  .then(function onFulfilled(value) {
    console.log(value);
  })
  .catch(function onRejected(error) {
    console.log(error);
  });

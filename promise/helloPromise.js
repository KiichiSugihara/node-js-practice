'use strict';

function asyncFunction() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Async Hello!');
    }, 16);
  });
}

asyncFunction()
  // 値が帰ってきた時のcallback指定
  .then(value => {
    console.log(value);
  })
  // エラーが帰ってきた時callback指定
  .catch(error => {
    console.error(error);
  });

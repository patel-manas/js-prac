// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// promise based set timeout

const execute = () => {
  console.log('start');
  setTimeout(() => {
    console.log('out > settimeout > 1');
  }, 1);
  setTimeout(() => {
    console.log('out > settimeout > 2');
  }, 2);
  let prom = new Promise((resolve) => {
    console.log('inside > promise > main');
    setTimeout(() => {
      console.log('inside > promise > settimeout > 3');
    }, 3);
    setTimeout(() => {
      console.log('inside > promise >settimeout >4');
    }, 4);
    resolve('promise reolved');
  });
  prom.then((r) => {
    console.log('response', r);
    setTimeout(() => {
      console.log('out > then > settimeout > 5');
    }, 5);
    setTimeout(() => {
      console.log('out > then > settimeout > 6');
    }, 6);
  });
};

execute();

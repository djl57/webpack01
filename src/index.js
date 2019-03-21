import { cube } from './math.js';

function component() {
var element = document.createElement('pre');

element.innerHTML = [
  'Hello webpack!',
  '5 cubed is equal to ' + cube(5)
].join('\n\n');

  return element;
}

document.body.appendChild(component());


/* import _ from 'lodash'
// import './style.css'
// import Logo from './logo.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  // var myLogo = new Image();
  // myLogo.src = Logo;

  // element.appendChild(myLogo);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
} */
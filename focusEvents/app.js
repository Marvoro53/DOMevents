// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.
var color= document.getElementById('name')
addEventListener('focus', (event) => {
    event.target.style.background = 'skyBlue';
  }, true);

  addEventListener('blur', (event) => {
    event.target.style.background = '';
  }, true);
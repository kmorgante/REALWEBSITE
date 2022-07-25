console.log("Hey! I'm Kelsey. Welcome to my portfolio site. I hope you enjoy!");
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}

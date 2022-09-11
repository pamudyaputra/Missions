// Text Fade In
var opacity = 0;
var loop;
var timeout;
var yPos = 100;

function fadeAnimation(el, speed) {
  loop = setTimeout("fadeAnimation('" + el + "'," + speed + ")", speed);
  if (opacity < 1) {
    opacity += 0.05;
  }
  document.getElementById(el).style.opacity = opacity;
}

function moveText(el, speed) {
  var object = document.getElementById(el);

  object.style.transform = `translate3d(0, ${yPos}px, 0)`;

  timeout = setTimeout("moveText('" + el + "'," + speed + ")", speed);

  if (yPos >= 50) {
    yPos -= 1;
  }
}

// Move Cloud 1
var xPos1 = 0;
var wait1 = 0;

function moveCloud1(el, speed) {
  var object = document.getElementById(el);

  object.style.transform = `translate3d(${xPos1}px, 0, 0)`;

  timeout = setTimeout("moveCloud1('" + el + "'," + speed + ")", speed);

  if (wait1 < 30) {
    wait1 += 1;
  } else {
    xPos1 += 1;
    if (xPos1 >= 1450) {
      xPos1 = -500;
    }
  }
}

// Move Cloud 2
var xPos2 = 0;
var wait2 = 0;

function moveCloud2(el, speed) {
  var object = document.getElementById(el);

  object.style.transform = `translate3d(${xPos2}px, 0, 0)`;

  timeout = setTimeout("moveCloud2('" + el + "'," + speed + ")", speed);

  if (wait2 < 30) {
    wait2 += 1;
  } else {
    xPos2 += 1;
    if (xPos2 >= 1000) {
      xPos2 = -950;
    }
  }
}

// Move Cloud 3
var xPos3 = 0;
var wait3 = 0;

function moveCloud3(el, speed) {
  var object = document.getElementById(el);

  object.style.transform = `translate3d(${xPos3}px, 0, 0)`;

  timeout = setTimeout("moveCloud3('" + el + "'," + speed + ")", speed);

  if (wait3 < 30) {
    wait3 += 1;
  } else {
    xPos3 += 1;
    if (xPos3 >= 500) {
      xPos3 = -1450;
    }
  }
}

// Move Cloud 4
var xPos4 = 0;
var wait4 = 0;

function moveCloud4(el, speed) {
  var object = document.getElementById(el);

  object.style.transform = `translate3d(${xPos4}px, 0, 0)`;

  timeout = setTimeout("moveCloud4('" + el + "'," + speed + ")", speed);

  if (wait4 < 30) {
    wait4 += 1;
  } else {
    xPos4 += 1;
    if (xPos4 >= 1950) {
      xPos4 = 0;
    }
  }
}

// Umbrella Spin In
var degrees = 0;
var uPos = 300;

function spinIn(el, speed) {
  var elem = document.getElementById(el);
  elem.style.transform = `translate3d(${uPos}px, 0, 0) rotate(${degrees}deg)`;
  elem.style.transformOrigin = "center";
  timeout = setTimeout("spinIn('" + el + "'," + speed + ")", speed);
  if (uPos >= 0) {
    uPos -= 1;
    degrees -= 1;
  }
}

// Shadow In
var sPos = 300;

function shadowIn(el, speed) {
  var object = document.getElementById(el);
  object.style.transform = `translate3d(${sPos}px, 0, 0)`;
  timeout = setTimeout("shadowIn('" + el + "'," + speed + ")", speed);
  if (sPos >= 0) {
    sPos -= 1;
  }
}

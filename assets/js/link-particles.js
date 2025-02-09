var cnvs = document.getElementById("canvasParticles");
cnvs.width = window.innerWidth;
cnvs.height = window.innerHeight;
var c = cnvs.getContext('2d');
var dots_num = window.innerWidth < 768 ? 30 : 100; // Adjust dots based on screen size
var r = 1;
var mx, my;
var mouse_ol = 150;
var dots_ol = 150;
var max_speed = 1;
var max_ms_opac = 1;
var max_dots_opac = 1;
var uni_divs = 30; // Ensures that dots are evenly spread across the canvas initially

window.addEventListener('mousemove', updtMouse);
window.addEventListener('resize', handleResize); // Handle resizing

var dots = new Array();

var Dot = function (x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
};

function updtMouse(e) {
  mx = e.x;
  my = e.y;
}

function handleResize() {
  // Update canvas size
  cnvs.width = window.innerWidth;
  cnvs.height = window.innerHeight;

  // Update dot numbers for responsive view
  dots_num = window.innerWidth < 768 ? 30 : 100;

  // Reinitialize dots
  dots = [];
  init();
}

function init() {
  for (let i = 0; i < dots_num; i++) {
    let x = Math.floor(
      (Math.random() * innerWidth) / uni_divs +
        parseInt(i / (dots_num / uni_divs)) * (innerWidth / uni_divs)
    );
    let y = Math.floor(Math.random() * innerHeight);
    let dx = Math.random() * max_speed + 0.1;
    let dy = Math.random() * max_speed + 0.1;
    if (i % 2 == 0) {
      dx *= -1;
      dy *= -1;
    }
    let temp = new Dot(x, y, dx, dy);
    dots.push(temp);
  }
}

function update() {
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < dots_num; i++) {
    let dy = dots[i].dy;
    let dx = dots[i].dx;

    dots[i].x += dx;
    dots[i].y += dy;

    // Rebound from walls
    if (dots[i].x > innerWidth || dots[i].x < 0) {
      dots[i].dx *= -1;
    }
    if (dots[i].y > innerHeight || dots[i].y < 0) {
      dots[i].dy *= -1;
    }

    let x = dots[i].x;
    let y = dots[i].y;

    // Draw its line to the mouse
    let d = Math.sqrt((x - mx) * (x - mx) + (y - my) * (y - my));
    if (d < mouse_ol) {
      c.strokeStyle = `rgba(222, 225, 255, 1)`;
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(mx, my);
      c.stroke();
    }

    // Draw lines with other dots
    for (let j = i + 1; j < dots_num; j++) {
      let x1 = dots[j].x;
      let y1 = dots[j].y;
      let d = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
      if (d < dots_ol) {
        c.strokeStyle = `rgba(222, 225, 255, 1)`;
        c.lineWidth = 1;
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.stroke();
      }
    }
  }
  requestAnimationFrame(update);
}

init();
requestAnimationFrame(update);

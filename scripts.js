// Jogo inicia após carregamento da página

window.onload = function () {

  var stage = document.getElementById('stage');
  var context = stage.getContext("2d");

  // Toda vez que uma tecla é pressionada, é executada a função abaixo
  document.addEventListener("keydown", keyPush);

  // Define que chamará a função "game" a cada 60 ms
  setInterval(game, 1000/15);

  const vel = 1;

  var velx = vely = 0;
  var pointx = 10;
  var pointy = 15;
  var lengthPoint = 20;
  var numberParts = 20;
  var appleX = appleY = 15;
  var trail = [];
  tail = 5;

  function game() {

    pointx += velx;
    pointy += vely;

    if (pointx < 0) {
      pointx = numberParts - 1;
    }
    if (pointx > numberParts - 1) {
      pointx = 0;
    }
    if (pointy < 0) {
      pointy = numberParts - 1;
    }
    if (pointy > numberParts - 1) {
      pointy = 0;
    }

    // Colore o plani de fundo do game
    context.fillStyle = "black";
    context.fillRect(0, 0, stage.width, stage.height);

    context.fillStyle = "red";
    context.fillRect(appleX * lengthPoint, appleY * lengthPoint, lengthPoint, lengthPoint);

    context.fillStyle = "gray";
    for (let i = 0; i < trail.length; i++) {
      context.fillRect(trail[i].x * lengthPoint, trail[i].y * lengthPoint, lengthPoint, lengthPoint);
      if (trail[i].x == pointx && (trail[i].y == pointy)) {
        velx = vely = 0;

      }
    }

    trail.push({ x: pointx, y: pointy })
    while (trail.length > tail) {
      // Remove o primeiro elemento do Array
      trail.shift();
    }

    if (appleX == pointx && appleY == pointy) {
      tail++;
      appleX = Math.floor(Math.random() = numberParts);
      appleY = Math.floor(Math.random() = numberParts);
    }


  }

  function keyPush(event) {
    switch (event.keyCode) {
      case 37: // Left
        velx = -vel;
        vely = 0;
        break;
      case 38: // Up
        velx = 0;
        vely = -vel;
        break;
      case 39: // Right
        velx = vel; 
        vely = 0;
        break;
      case 40: // Down
        velx = 0;
        vely = vel;
        break;
      default:
        break;

    }


  }


}

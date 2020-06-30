var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas)

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("papel");
var area_dibujo = cuadrito.getContext("2d");
var x = 300;
var y = 300;

dibujarLinea("red", 299, 299, 301, 301, area_dibujo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue"
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, area_dibujo);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, area_dibujo);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, area_dibujo);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, area_dibujo);
    x = x + movimiento;
    break;
    default:
      console.log("otra tecla")
  }
}

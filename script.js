function command(){
let commandInput = prompt("Enter a command:", "example");

  // canvas 
  const canvas = document.querySelector("canvas")
  canvas.width = 300
  canvas.height = 300
  const ctx = canvas.getContext('2d')
  const getPaddle = () => ({
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  color: 'orange',
  draw() {
    // Draw Square Code:
    // ctx.fillStyle = this.color
    // ctx.fillRect(this.x, this.y, this.w, this.h)
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
    ctx.fill();
    }
  })
  const paddle = getPaddle()

  // Commands functions 
switch(commandInput){
  case "help": // commando de ayuda
    alert("Commands: \n Help: For help \n Create: for create a new map \n Create-gravity: create a gravity \n Generate-circle: genere a circle of size medium \n Generate-BigCircle: genere a circle of size big \n Generate-SmallCircle: genere a circle of size small \n Generate-square: genere a square of size medium ");
  break;
  case "Create": // comando para crear un nuevo mapa
    alert("Create map whit exit!");
  break;
  case "Create-gravity": // comando para crear gravedad
    let gravity = prompt("Enter a gravity value like number int or float", "9");
    if(isNaN(gravity)){
      alert("Enter a value int or float");
      let gravity = prompt("Enter a gravity value like number int or float", "9");
    } else if(gravity == null){
      alert("Enter a value int or float");
      let gravity = prompt("Enter a gravity value like number int or float", "9");
    } else {
    }
  break;
  case "Generate-circle": //comando para dibujar un circulo
    paddle.draw()
  break;
  case "Generate-square": // comando para dibujar un cuadrado
    paddle.drawSquare()
  break; 
  default:
    alert("Invalid command verify your orthography, use command: 'help' for see de commands and your function");
  break;
}
 }

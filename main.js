/*Colocar variables x y y con valor de para ubicar la posición de la figura*/
x = 0;
y = 0;

/*Colocar las variables dibujar círculo y dibujar rectángulo*/
draw_circle = "";
draw_rect = "";

/*Guardar API que convierte la voz a texto webkitSpeechRecognition */
var SpeechRecognition = window.web.webkitSpeechRecognition;

/*Crear la nueva API SpeechRecognition();  */
var recognition = new SpeechRecognition();

/*Crear la función start() para iniciar. */
function start()
{
  /*Poner la siguiente "El sistema está escuchando. Por favor, habla."; */
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla."; 
    /*Iniciar el reconocimiento de voz */
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

/*Almacenar en la variable contenido los resultados con los índices 0 0  */ 
var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 

      /*Si el contenido es igual a círculo */
      if(content =="circle")
      {
        /*Utilizar la función Math.floor y dentro de esta pasaremos la función Math.random() y la multiplicaremos por 900 */
        x = Math.floor(Math.random() * 900);
        /*Utilizar la función Math.floor() y dentro de esta pasaremos la función Math.random() y la multiplicaremos por 600 */
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo "; 
        draw_circle = "set";
      }
      /*Si el contenido es igual a rectángulo */
      if(content =="rect")
      {
        /*Utilizar la función Math.floor() y dentro de esta pasaremos la función Math.random() y la multiplicaremos por 900 */
        x = Math.floor(Math.random() * 900);
        /*Utilizar la función Math.floor() y dentro de esta pasaremos la función Math.random() y la multiplicaremos por 600 */
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo "; 
        draw_rect = "set";
      }
}

function setup() {
  /*Crear el lienzo con posición x de 900 y posición y de 600*/
  canvas = createCanvas(900, 600);
}

function draw() {
  /*Si la función dibujar círculo es igual a set */
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    /*Usar función círculo */
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Se dibujó un círculo. ";
    draw_circle = "";
  }
  /*Si la función dibujar rectangulo es igual a set */
  if(draw_rect == "set")
  {
    /*Usar función rectángulo */
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Se dibujó un rectángulo. ";
    draw_rect = "";
  }

}









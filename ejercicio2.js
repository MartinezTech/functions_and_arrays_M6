var text = "";
function br(number){
  var i;
  for (i = 0; i < number; i++) {
    text += "<br>";
  }
  console.log(text);
  return text;
}
var number = window.prompt("Cuantos saltos de linea quieres? ");
document.getElementById("demo").innerHTML = "A continuación verás " + number + " saltos de lineas..." + br(number) + "texto final";


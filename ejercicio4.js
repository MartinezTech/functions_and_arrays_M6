function desordenar(nombres){   //Using Fisher-Yates Shuffle algorithm
    arr_1d = nombres.flat();
    var currentIndex = arr_1d.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {  // While there remain elements to shuffle...

      randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element...
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arr_1d[currentIndex];
      arr_1d[currentIndex] = arr_1d[randomIndex];
      arr_1d[randomIndex] = temporaryValue;
      }

    return arr_1d;
    }
  
  var ask = window.prompt("Introduce tres nombres separados con una coma: ");
  var arr1 = ask.split(",");  //Using funtion split to get all names introduced by user
  var arr2 = arr1.map(arr1 => arr1.toUpperCase()); //Declare arr2 to transform names with function uppercase
  var nombres = [];
  for(var i = 0; i < 3; i++){ //add nombres into 3x2 array with function push
    nombres.push([arr1[i], arr2[i]]);
  }
  nombres_desordenados = desordenar(nombres); //call function desordenar
  nombres_desordenados.forEach((nombre) => {  
      document.getElementById("card-deck").innerHTML += "<li class='card' type='"+nombre.toLowerCase()+"'><i> " + nombre + "</i></li>";
  })
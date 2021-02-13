
      function desordenar(nombres){
        //Using Fisher-Yates Shuffle algorithm
        arr_1d = nombres.flat();
        
        var currentIndex = arr_1d.length, temporaryValue, randomIndex;
         // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
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
      //add nombres into 3x2 array with function push
      for(var i = 0; i < 3; i++){
        nombres.push([arr1[i], arr2[i]]);
      }
      //show values of nombres array
      document.writeln("<h3>Mostrando los nombres introducidos por el usuario: </h3><br>");
      nombres.forEach((nombre) => {
        nombre.forEach((data) => {
          document.writeln(data);
        })
        document.writeln("<br>");
      })
      
      //call function desordenar
      nombres_desordenados = desordenar(nombres);
      document.writeln("<h3>A continuación te mostramos los nombres desordenados: </h3><br>");
      nombres_desordenados.forEach((nombre) => {
        document.writeln(nombre);
      })
function palindromo(cadena){
    cadena=cadena.toLowerCase().replace(/\s/g,"");
    cadenaAlReves = cadena.split("").reverse().toString();
    
    for (var i = 0; i < ((cadenaAlReves.length)-1); i++) {
        cadenaAlReves=cadenaAlReves.replace(",","");
      };
      if(cadena==cadenaAlReves){
        console.log("Es un palindromo");
      }else{
          console.log("No es un palindromo");
      } 
}

function numeroVocales(cadena){
    cadenaSeparada = cadena.toLowerCase();
    numeroVocales = 0;
    numeroConsonantes=0;
    for (var i = 0; i < (cadenaSeparada.length); i++) {
        if((cadenaSeparada[i]=='a'|| cadenaSeparada[i]=='e'|| cadenaSeparada[i]=='i'|| 
           cadenaSeparada[i]=='o'|| cadenaSeparada[i]=='u')){
        numeroVocales=numeroVocales+1;
      }else{
          if(cadenaSeparada[i]!=" "){
          numeroConsonantes=numeroConsonantes+1;
      }
      }
      };
    console.log("Numero de vocales: "+numeroVocales);
    console.log("Numero de consonantes: "+numeroConsonantes);
}

function numeroPalabras(cadena){
    numeroPalabras=1;
    for (var i = 0; i < (cadena.length); i++) {
        if(cadena[i]==" "){
        numeroPalabras=numeroPalabras+1;
        }
      };
      console.log("Numero de palabras= "+numeroPalabras);
}


function numeroLetrasSinEspacio(cadena){
    //cadena2=cadena.replace(" ","");
    //console.log(cadena2);
    numeroLetras=0;
    for (var i = 0; i < (cadena.length); i++) {
        if(cadena[i]==" "){
        }else{
        numeroLetras=numeroLetras+1;
        }
      };
      console.log("Numero de letras= "+numeroLetras);
}




module.exports.palindromo = palindromo;
module.exports.numeroVocales = numeroVocales;
module.exports.numeroLetrasSinEspacio = numeroLetrasSinEspacio;
module.exports.numeroPalabras = numeroPalabras;
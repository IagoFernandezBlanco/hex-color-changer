// RECUERDA: Plantear paso a paso lo que debe hacer la aplicación; no escribir directamente código JavaScript

/*
necesito recuperar del DOM los elementos que voy a necesitar
Boton --> #btn
*/

/*
Función que me permite generar numero aleatorios en formato hexadecimal
0xfffff --> numero (255,255,255)
Se multiplica por 100000, para que sea lo suficeinetemente grande y se pasa tod el numero a String de 16 caracteres
se retorna un # concatenado con la variable de color_Random al que se le aplica un slice(recoges desde el primer numero
hasta el 7 )
*/
const color_hexadecimal_aleatorio = () => {
    let color_Random = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + color_Random.slice(0, 6);
  };
  
 /*
Metodo listener que hace una invocacion de la primera funcion
 */
let boton = document.querySelector("#btn");
boton.addEventListener("click", ()=>{
    /*
    Console log para comprobar que funciona el listener
    console.log("Hola")
    */
   document.body.style.background = random_hex_color_code();
})

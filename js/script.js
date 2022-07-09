

let form = document.querySelector('#form')
let input = document.querySelector('input')
let select = document.querySelector('#colores')
let btn = document.querySelector('button')
let correos = []

/* btn.addEventListener('click', (e)=>{
     console.log(input.value);
     console.log(select.selectedIndex);
}) */

input.setCustomValidityJS = (mensaje)=>{
    console.log(mensaje);
    let div = document.querySelector('#mensaje')
    div.innerText = mensaje
    div.style.display = mensaje ? 'block' : 'none'

}



form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let valor = input.value
    /* Function trim: Quita espacios en blanco en una cadena al principio y al final*/
    valor = valor.trim()
    let mensaje


    if( valor ){
        input.setCustomValidityJS('')
    }else{
        input.setCustomValidityJS('Este campo no puede estar vacío');
        return 
    }

    if(valor.length < 3){
        input.setCustomValidityJS('Este campo debe tener como mínimo 3 caracteres');
        return 
    }

    if ( valor.length > 21 ){
        input.setCustomValidityJS('Este campo debe tener como máximo 10 caracteres');
        return 
    }

    comparaConRegExp(valor)

    /* if(valor.includes(' ')){
        input.setCustomValidityJS('Este campo no admite espacios vacíos');
        return
    }

    if(!valor.includes('@')){
        input.setCustomValidityJS('No es un email válido');
        return
    }

    if(!valor.includes('.com')){
        input.setCustomValidityJS('No es un email válido');
        return
    }

    if(!(valor[0]>='A' && valor[0]<='Z')){
        input.setCustomValidityJS('La primera letra debe estar en mayúsculas');
        return
    }
 */

    /* if(correos.includes(valor)){
        console.log(correos);
        input.setCustomValidityJS('Ese email ya está registrado');
        return
    }else{ */
     
      /*agregarEmail(valor)  */
     // comparaConRegExp(valor)
      
  //  }

    

})


function agregarEmail(valor){
    correos.push(valor)
}

function comparaConRegExp(valor){

   //let miRegExp = new RegExp('aa') 


   let miRegExp = /abcabc/
   let resultado = miRegExp.test(valor)
   console.log(resultado);

}


/*  Expresiones regulares modificadores */

/**
 *  \w: word
 *  \W: not word
 *  \d: digits
 *  \D: not digits
 *  \s: space, saltos de línea
 *  \S: not space
 *  ^ (alt+94): Inicio de la expresión
 *  $ : final de la expresión
 *  \b: boundary - límite de una palabra 
 *  {N}:Cantidad exacta de repeticiones
 *  {N,M}:La M representa máximo
 *  ():Un grupo completo => (abc){2}
 *  *: repetición entre 0 y muchas instancias == {0,}
 *  +: repetición entre 1 y muchas instancias == {1,}
 */




/***
* CALLBACKS
 */



/* function hola( nombre, cb, otro ){
    console.log(`Hola ${nombre }`);
    
    if (typeof cb == 'function'){
        cb()
    }else{
        console.log('No es una function');
    }

    
} */

/* const hola2 = function(){
    console.log('Hola mundo desde Hola2');

}

const hola3 = ()=>{
    console.log('Hola mundo desde Hola3');
}

hola( 'Javier', 2, hola )
 */


/* function operacion(a,b,cb){
    if ( typeof cb != 'function' ) {
        console.log(`La function callback no es una función`)
        return
    }
       
    return(cb(a,b))
}

function suma(a,b){
    return a + b
}

const result = operacion(1,2,suma)

console.log(result); */

/******************************
 * Eventos
 */

const btn = document.querySelector('button')
const click = ()=>{
    btn.textContent='Click me'
    btn.style.color = 'red'
}
/*
const click2 = ()=>{
    console.log('click2');
}

btn.onclick = click */

/* function click(){
    console.log('click');

} */

/* btn.addEventListener('click', click)
btn.addEventListener('click', ()=>{
    console.log('Cambié de texto');
})
const div = document.querySelector('.marquesina')
btn.addEventListener('click', function(){
    div.classList.add('clasemovimiento')
})

window.addEventListener('load', ()=>{

   console.log('onload');
    
}) */

/*****
 *  Eventos con el Objeto Event
 */
/* btn.classList.add('Nombre')
 const div = document.querySelector('.marquesina')
 btn.addEventListener('click', function(e){

    console.log(e.target);

    div.classList.add('clasemovimiento')
}) */

/****
 *  PROPAGACION de EVENTO
 */

 let UNO = document.getElementById('uno')
 let DOS = document.getElementById('dos')
 let TRES = document.getElementById('tres')





TRES.addEventListener('click', e =>{
    /*e.stopPropagation()*/
    console.log('click en TRES')
})

DOS.addEventListener('click', e =>{
   /* e.stopPropagation()*/
    console.log('click en DOS')
})

UNO.addEventListener('click', e=>{
    /*e.stopPropagation()*/
    console.log('click en UNO')
})

const link = document.querySelector('a')

link.addEventListener('click', e =>{
    e.preventDefault()
    alert('Te esperamos la próxima')
    console.log('Me voy')
    window.location = 'https://google.com'

 
})


/*****
 * Eventos dinámicos
 */

const estatico = document.querySelector('#estatico')



document.addEventListener('click', e =>{
    console.log(e.target.id);
    let id = e.target.id
    
    if(id == 'dinamico'){
        console.log('Soy el botón dinámico');
    }

    if(id == 'estatico'){

        if (!document.querySelector('#dinamico')){
            const dinamico = document.createElement('button')
            dinamico.textContent = 'Dinámico'
            dinamico.id='dinamico'
            document.querySelector('body').appendChild(dinamico)
        
        }
    }
    
})











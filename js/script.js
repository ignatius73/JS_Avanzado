
/***
 * Sincrónico
 */
function sync(){
    for(let x=0;x<3e9;x++){}
}

/***
 *  0 a 16 --- 0 1 2 3 4 5 6 7 8 9 A B C D E F
 */

/* console.log('Inicio contador A ');
console.log('Tarea A -> paso1'); sync()
console.log('Tarea A -> paso2'); sync()
console.log('Tarea A -> paso3'); sync()
console.log('Tarea A -> paso4'); sync()
console.log('Tarea A -> paso4'); sync()

console.log('Inicio contador B');
console.log('Tarea B -> paso1'); sync()
console.log('Tarea B -> paso2'); sync()
console.log('Tarea B -> paso3'); sync()
console.log('Tarea B -> paso4'); sync()
console.log('Tarea B -> paso4'); sync() */

/****
 * Asyncronic Callbacks
 */
/* 
let valor = 5;
let objeto;

function delaySync(cb){
    setInterval(()=>{
        console.log('SetInterval');
    }, 1000) 
    setTimeout(cb, 1500)
} 

/* console.log('Inicio de tareas A'); //1
delaySync(()=>{ //4
    console.log('Tarea A -> paso1');
    delaySync(()=>{//6
        console.log('Tarea A -> paso2');
        delaySync(()=>{
            console.log('Tarea A -> paso3');
        })
    })
}) */

/* console.log('Inicio de tareas B');//2
delaySync(()=>{//5

    console.log('Tarea B -> paso1');
    delaySync(()=>{//7
        console.log('Tarea B -> paso2'); 
        delaySync(()=>{
            console.log('Tarea B -> paso3'); 
        })
    })
    

}) */

/* console.log('Prueba de asincronía');//3
console.log(valor);
console.log(objeto); */


/****
 *   XMLHttpRequest | XHR | AJAX - JAVASCRIPT Y XML ASINCRÓNICO (json) JAVASCRIPT OBJECT NOTATION
 * 
 * 
 * HTTP: Protocolo Cliente - Servidor
 * Http body
 * Http Headers:
 *  content-length: Saber qué tamaño tiene lo que nosotros fuimos a solicitar
 *  content-type: 'text/plain', 'text/html', 'image/jpg', 'image/png', 'application/json'.
 */

let xhr = new XMLHttpRequest

/****
 * localhost = 127.0.0.1:5501 -- 
 * VSCode - Extensions
 * Extensión servidor http: live server
 * Extensión barra actividad : Activitus Bar
 * ENDPOINTS -
 */

/* readyState
  0.- La instancia está creada
  1.- La instancia está configurada
  2.- Hay intercambio de headers
  3.- Downloading
  4.- Finalizado no necesariamente exitoso
*/

/* Verbos HTTP GET | POST | PUT | PATCH | DELETE */
xhr.open('get','https://jsonplaceholder.typicode.com/photos')

xhr.send()

xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState == 2){
        let tipo = xhr.getResponseHeader('content-type')
        if(tipo.includes('application/json')){
            xhr.abort()
        }

    }
})

xhr.addEventListener('load', ()=>{
    
    if(xhr.status == 404){
        console.error('El recurso no se encontró')
        return
    }
    if(xhr.status == 200){
     let response = xhr.response
        response = JSON.parse(response)
        let p = document.createElement('img')
        p.src = response[1].url
        document.querySelector('body').appendChild(p) 

    }
  
})

xhr.addEventListener('abort', ()=>{
    console.log('Abort');
    let p = document.createElement('p')
    p.textContent = 'Petición abortada'
    document.querySelector('body').appendChild(p)
})

xhr.addEventListener('timeout', ()=>{
    console.log('La petición se excedió de tiempo');
})

xhr.timeout = 1000








const hamb = document.querySelector('.hamburguer')
const links = document.querySelectorAll('a')
const nav = document.querySelector('nav')
const navigation = document.querySelectorAll('.navigation')
const xhr = new XMLHttpRequest
const main = document.querySelector('main')
let page;
let content;


links.forEach( link =>{
    link.addEventListener('click', (e)=>{
        
        /***
         *  api web hash 
         * 
         * Explicando location.hash 
         * location.hash = link.id
         * 
         * 
         */
        
       // location.hash = link.id

        /***
         *  api web pushState()
         * 
         */

        page = link.id
        //history.pushState(null,'', link.id)

        
        if(link.id != 'jobs'){
            let archivo = `${link.id}.html`;
            
            ajax(archivo)
            return
        }
        
        ajax('https://jsonplaceholder.typicode.com/photos')


    })


})

ajax('home.html')

document.addEventListener('click', (e)=>{
    e.preventDefault()
    let style = window.getComputedStyle(nav).getPropertyValue('margin-left');

    if(e.target.classList == 'hamburguer'){
      
        if(style == '-250px'){
            showNav()

        }else{
            hideNav()
        }
    
    }
    if(e.target.className == 'navigation'){
        if(nav.classList.contains('show')){
            hideNav()
        }

    }



})

function showNav(){
    if(nav.classList.contains('hide')){
        nav.classList.toggle('hide')
    }
    nav.classList.toggle('show')
}

function hideNav(){
    if(nav.classList.contains('show')){
        nav.classList.toggle('show')
    }
    nav.classList.toggle('hide')
}


function ajax(url, metodo){
    let metodo_http = metodo || 'GET' 

    xhr.open(metodo_http, url)
    xhr.send()
}

xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState == 2){
        content = xhr.getResponseHeader('content-type')
    }
})

xhr.addEventListener('load', (e)=>{
    console.log(e);
    //Caché
    
    
    if(xhr.status == 200){

        if( !content.includes('json')){
            main.innerHTML = xhr.response
            history.pushState({template: xhr.response},'', page)
        }else{
            main.innerHTML = ''
            let response = JSON.parse(xhr.response)
            loadJobs(response)
        }
        //Lo cambio del cuerpo principal al momento en que ya están los datos para reservar en caché la data que ya fue a buscar
        history.pushState({template: xhr.response},'', page)
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth > 479){
        nav.classList.remove('hide')
    }
})

function loadJobs(response){
    
    if(response){
        const container = document.createElement('div')
        container.classList.add('job-container')

        for(x=0; x<8;x++){
            const div = document.createElement('div');
            div.classList.add('job');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');

            img.src = response[x].url;
            img.alt = response[x].title;

            h3.textContent = response[x].title;
            div.appendChild(h3)
            div.appendChild(img)


            container.appendChild(div)



        }

        main.appendChild(container);
       
    }
}

/*-------------------------------------------------------------*/
/*                   Navegacion por hash                       */
/*-------------------------------------------------------------*/


/* window.addEventListener('hashchange', ()=>{
    let id = location.hash.slice(1)
    
    ajax(`${id}.html`)

}) */


/*-------------------------------------------------------------*/
/*                   Navegacion por pushState                  */
/*-------------------------------------------------------------*/

/* window.addEventListener('popstate', ()=>{
    let id = location.pathname.slice(1)

    ajax(`${id}.html`)

}) */

/*-------------------------------------------------------------*/
/*                   Navegacion con Caché                      */
/*-------------------------------------------------------------*/

window.addEventListener('popstate', (e)=>{

    //Obtengo el objeto evento, en este caso utilizo la propiedad state

    if(e.state.template){
        
        main.innerHTML = e.state.template
    }else{
        let id = location.pathname.slice(1)
    
        ajax(`${id}.html`)

    }


})




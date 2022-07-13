const hamb = document.querySelector('.hamburguer')
const links = document.querySelectorAll('a')
const nav = document.querySelector('nav')
const navigation = document.querySelectorAll('.navigation')

hamb.addEventListener('click', ()=>{

})


document.addEventListener('click', (e)=>{
    console.log(e.target)

    if(e.target.classList == 'hamburguer'){
        
        nav.classList.toggle('show')
        nav.classList.toggle('hide')
            
    }



})


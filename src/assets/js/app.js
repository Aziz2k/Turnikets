let btn = document.querySelector('.phone__btn--mob')

btn.addEventListener('click',()=>{
  document.querySelector('.ul__menu').classList.toggle('active')
})
btn.addEventListener('click',()=>{
  document.querySelector('.ulmenu').classList.toggle('active')
})

let src = document.querySelector('.phone__btn--btnSrc')
src.addEventListener('click',()=>{
  document.querySelector('.input').classList.toggle('show')
})

var modal = document.querySelector('.modal')


function showModal(){
    modal.classList.toggle('active')
}

function hideModal(){
    modal.classList.remove('active')
}


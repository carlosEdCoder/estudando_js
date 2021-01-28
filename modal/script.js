let small_image = document.querySelectorAll('.small-img')
let modal_image = document.querySelector('.modal-image')
let modal = document.querySelector('.modal')
let btn_close = document.querySelector('.btn-close')

for(let i = 0; i < small_image.length; i++){
    small_image[i].addEventListener('click', function(){
        srcVal = small_image[i].getAttribute('src')
        modal_image.setAttribute('src', srcVal)
        
        modal.classList.toggle('modal-active')
    })
}

btn_close.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
})
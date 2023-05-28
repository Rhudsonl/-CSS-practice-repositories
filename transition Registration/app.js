const registerBtn = document.querySelector('.signup-btn')
const signInBtn = document.querySelector('.signin-btn')
const form = document.querySelector('.form-box')
const body = document.querySelector('body')
 
registerBtn.addEventListener('click', () => {
    form.style.left = '50%'
    body.classList.add('body-active')
    form.classList.add('active')

    
})
signInBtn.addEventListener('click', () => {
    form.style.left = '0%'
    body.classList.remove('body-active')
    form.classList.remove('active')

})
console.log(registerBtn)
console.log(signInBtn)
console.log(form.style.right)
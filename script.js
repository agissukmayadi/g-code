const hamburgerMenu = document.querySelector(".hamburger")
const hamburgerIcon = document.querySelector(".hamburger i")
const link = document.querySelector('.link')

hamburgerMenu.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('fa-xmark')
    link.classList.toggle('show')
})
// CHECK LOGINN
const elUls = document.querySelectorAll('.header_Right > ul li')
const elUlss = document.querySelectorAll('.log_Innn > div')
const elLblUserName = document.getElementById('lblUserName')
const elblUserNames = document.getElementById('lblUserNames')

let isLogin = JSON.parse(localStorage.getItem('isLogin')) || false
let username = JSON.parse(localStorage.getItem('username'))


if (isLogin) {
    elUls[0].style.display = 'none'
    elUls[1].style.display = 'none'
    elUls[2].style.display = 'block'
    elLblUserName.textContent = username
} else {
    elUls[0].style.display = 'block'
    elUls[1].style.display = 'block'
    elUls[2].style.display = 'none'
}

if (isLogin) {
    elUlss[0].style.display = 'none'
    elUlss[1].style.display = 'none'
    elUlss[2].style.display = 'block'
    elblUserNames.textContent = username
} else {
    elUlss[0].style.display = 'block'
    elUlss[1].style.display = 'block'
    elUlss[2].style.display = 'none'
}
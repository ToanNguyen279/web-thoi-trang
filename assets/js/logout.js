const elUl = document.querySelectorAll('.header_Right > ul li')


document.getElementById('log_Out').onclick = () => {
    localStorage.setItem('isLogin', JSON.stringify(false))
    let isLogin = JSON.parse(localStorage.getItem('isLogin')) && true
    if (isLogin) {
        elUl[0].style.display = 'none'
        elUl[1].style.display = 'none'
        elUl[2].style.display = 'block'
    } else {
        elUl[0].style.display = 'block'
        elUl[1].style.display = 'block'
        elUl[2].style.display = 'none'
    }
};



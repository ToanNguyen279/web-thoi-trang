const listProduct = [
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 75
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 135
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 50
    },
    {
        src: './assets/imgs/nautica-mens-sleepwear-quarter-zip-knit-seaworthy_1_large.webp',
        nameProduct: "Product",
        price: 65
    }
]

const containerProduct = document.getElementById('containerProduct')
let str = ''
for (let i = 0; i < listProduct.length; i++) {
    str += ` <div class="sale_Products">
                     <div style="display: flex; height: 250px; width: 150px; background-color: #e5e5e5;">
                         <img style="margin: auto;" class="sale_Products_Img" src="${listProduct[i].src}" alt="">
                    </div>
                    <div class="product_Name">${listProduct[i].nameProduct}</div>
                    <div class="product_Price">${listProduct[i].price}$</div>
                </div>`

}

containerProduct.innerHTML = str

// menumobile
const menu = document.getElementById('menu')


let isOpen = false
document.getElementById('open_Menu').onclick = () => {
    menu.style.display = (isClickSelect = !isClickSelect) ? 'block' : 'none';
}

// Tiền

const elOption = document.getElementById('selectOption');
const elH1 = document.getElementById('selectBoxText');
const listElOption = document.querySelectorAll('#options div');

let isClickSelect = false;

document.getElementById('selectBox').onclick = () => {
    elOption.style.display = (isClickSelect = !isClickSelect) ? 'block' : 'none';
};

listElOption.forEach((option) => {
    option.onclick = (e) => {
        elH1.textContent = e.target.textContent;
        listElOption.forEach((opt) => opt.classList.remove('optionText'));
        e.target.classList.add('optionText');
        elOption.style.display = (isClickSelect = !isClickSelect) ? 'block' : 'none';
    };
});

const forms = document.querySelector(".needs-validation");
const userNameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");

userNameElement.addEventListener("blur", validateUsername);
passwordElement.addEventListener("blur", validatePassword);

const userLocal = JSON.parse(localStorage.getItem("users")) || [];


const reSpaces = /^\S*$/;
const re6 = /^\S{6,}$/;
const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateUsername(e) {
    if (reSpaces.test(userNameElement.value) && re6.test(userNameElement.value)) {
        userNameElement.classList.remove("border-red-500");
        userNameElement.classList.add("border-green-500");
        document.getElementById("username-error").classList.add("hidden");
        return true;
    } else {
        userNameElement.classList.remove("border-green-500");
        userNameElement.classList.add("border-red-500");
        document.getElementById("username-error").classList.remove("hidden");
        return false;
    }
}

function validatePassword() {
    if (rePassword.test(passwordElement.value) && reSpaces.test(passwordElement.value)) {
        passwordElement.classList.remove("border-red-500");
        passwordElement.classList.add("border-green-500");
        return true;
    } else {
        passwordElement.classList.add("border-red-500");
        passwordElement.classList.remove("border-green-500");
        return false;
    }
}

forms.addEventListener("submit", (e) => {
    if (!forms.checkValidity() || !validateUsername() || !validatePassword()) {
        e.preventDefault();
    } else {
        e.preventDefault();
        let isCheckUserName = userLocal.some(
            (user) => user.userName === userNameElement.value
        );
        let isCheckPassword = userLocal.some(
            (user) => user.password === passwordElement.value
        );
        if (isCheckPassword && isCheckUserName) {
            alert("Logged in Successfully!");
            window.location.href = './index.html'
            localStorage.setItem('isLogin', JSON.stringify(true))
            localStorage.setItem("username", JSON.stringify(userNameElement.value));
        } else {
            localStorage.setItem('isLogin', JSON.stringify(false))
            alert("Login Unsuccessful");
        }
    }
});


const forgot_Password_Box = document.getElementById("forgot_Password_Box");


document.getElementById('forgot_Password').onclick = () => {
    forgot_Password_Box.style.display = 'block'
}

document.getElementById('close_Forgot_Password').onclick = () => {
    forgot_Password_Box.style.display = 'none'
}
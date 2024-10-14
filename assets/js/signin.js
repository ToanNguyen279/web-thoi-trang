// Chỗ này là list product e thêm gì e thêm vào e nhé, thường có thêm cái tên e chèn vào alt ở img ấy e

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
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const repasswordInput = document.querySelector("#re-password");

userNameElement.addEventListener("blur", validateUsername);
emailElement.addEventListener("blur", validateEmail);
passwordElement.addEventListener("blur", validatePassword);
repasswordInput.addEventListener("blur", validateRePassword);

const reSpaces = /^\S*$/;
const re6 = /^\S{6,}$/;
const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const reEmail = /^\S+@\S+\.\S+$/;

let users = JSON.parse(localStorage.getItem("users")) || [];
let user = {
    userName: "",
    email: "",
    password: "",
};

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

function validateEmail() {
    if (reSpaces.test(emailElement.value) && reEmail.test(emailElement.value)) {
        emailElement.classList.remove("border-red-500");
        emailElement.classList.add("border-green-500");
        document.getElementById("email-validation").classList.add("hidden");
        return true;
    } else {
        emailElement.classList.add("border-red-500");
        emailElement.classList.remove("border-green-500");
        document.getElementById("email-validation").classList.remove("hidden");
        return false;
    }
}

function validatePassword() {
    if (
        rePassword.test(passwordElement.value) &&
        reSpaces.test(passwordElement.value)
    ) {
        passwordElement.classList.remove("border-red-500");
        passwordElement.classList.add("border-green-500");
        document.getElementById("password-error").classList.add("hidden");
        return true;
    } else {
        passwordElement.classList.add("border-red-500");
        passwordElement.classList.remove("border-green-500");
        document.getElementById("password-error").classList.remove("hidden");
        return false;
    }
}

function validateRePassword() {
    if (passwordElement.value == repasswordInput.value) {
        repasswordInput.classList.remove("border-red-500");
        repasswordInput.classList.add("border-green-500");
        return true;
    } else {
        repasswordInput.classList.add("border-red-500");
        repasswordInput.classList.remove("border-green-500");
        return false;
    }
}

forms.addEventListener("submit", function (event) {
    if (
        !forms.checkValidity() ||
        !validateEmail() ||
        !validateUsername() ||
        !validatePassword() ||
        !validateRePassword()
    ) {
        event.preventDefault();
    } else {
        event.preventDefault();
        let userLocal = JSON.parse(localStorage.getItem("users")) || [];
        let isCheckUserName = userLocal.some((user) => user.userName === userNameElement.value);
        let isCheckMail = userLocal.some((user) => user.email === emailElement.value);
        console.log(isCheckMail, isCheckUserName, 'isCheck');


        if (!isCheckUserName && !isCheckMail) {
            alert("Sign Up Success");

            user = {
                userName: userNameElement.value,
                password: passwordElement.value,
                email: emailElement.value,
            };

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = './login.html'

        } else {
            alert("Email or Username already exists");
        }
    }
});




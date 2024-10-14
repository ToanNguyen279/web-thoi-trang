

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



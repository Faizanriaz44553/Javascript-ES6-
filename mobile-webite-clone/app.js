let mainDiv = document.querySelector('#main-div');
let mobileDetail = [
    {
        "model": "Galaxy S21",
        "brand": "Samsung",
        "price": 799,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Galaxy+S21"
    },
    {
        "model": "iPhone 12",
        "brand": "Apple",
        "price": 699,
        "specs": {
            "RAM": "4GB",
            "storage": "64GB",
            "battery": "2815mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=iPhone+12"
    },
    {
        "model": "Mi 11",
        "brand": "Xiaomi",
        "price": 749,
        "specs": {
            "RAM": "8GB",
            "storage": "256GB",
            "battery": "4600mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Mi+11"
    },
    {
        "model": "Pixel 5",
        "brand": "Google",
        "price": 699,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4080mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Pixel+5"
    },
    {
        "model": "OnePlus 9",
        "brand": "OnePlus",
        "price": 729,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4500mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=OnePlus+9"
    },
    {
        "model": "P40 Pro",
        "brand": "Huawei",
        "price": 899,
        "specs": {
            "RAM": "8GB",
            "storage": "256GB",
            "battery": "4200mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=P40+Pro"
    },
    {
        "model": "Moto G Power",
        "brand": "Motorola",
        "price": 249,
        "specs": {
            "RAM": "4GB",
            "storage": "64GB",
            "battery": "5000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Moto+G+Power"
    },
    {
        "model": "Redmi Note 10",
        "brand": "Xiaomi",
        "price": 199,
        "specs": {
            "RAM": "4GB",
            "storage": "64GB",
            "battery": "5000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Redmi+Note+10"
    },
    {
        "model": "Nord N10",
        "brand": "OnePlus",
        "price": 299,
        "specs": {
            "RAM": "6GB",
            "storage": "128GB",
            "battery": "4300mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Nord+N10"
    },
    {
        "model": "A52",
        "brand": "Samsung",
        "price": 349,
        "specs": {
            "RAM": "6GB",
            "storage": "128GB",
            "battery": "4500mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=A52"
    },
    {
        "model": "iPhone SE",
        "brand": "Apple",
        "price": 399,
        "specs": {
            "RAM": "3GB",
            "storage": "64GB",
            "battery": "1821mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=iPhone+SE"
    },
    {
        "model": "V60 ThinQ",
        "brand": "LG",
        "price": 799,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "5000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=V60+ThinQ"
    },
    {
        "model": "Xperia 5 II",
        "brand": "Sony",
        "price": 949,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Xperia+5+II"
    },
    {
        "model": "Find X3 Pro",
        "brand": "Oppo",
        "price": 1149,
        "specs": {
            "RAM": "12GB",
            "storage": "256GB",
            "battery": "4500mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Find+X3+Pro"
    },
    {
        "model": "Reno 5 Pro",
        "brand": "Oppo",
        "price": 499,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4350mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Reno+5+Pro"
    },
    {
        "model": "Zenfone 7",
        "brand": "Asus",
        "price": 749,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "5000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Zenfone+7"
    },
    {
        "model": "K52",
        "brand": "LG",
        "price": 199,
        "specs": {
            "RAM": "4GB",
            "storage": "64GB",
            "battery": "4000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=K52"
    },
    {
        "model": "Realme 8",
        "brand": "Realme",
        "price": 229,
        "specs": {
            "RAM": "4GB",
            "storage": "128GB",
            "battery": "5000mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Realme+8"
    },
    {
        "model": "Nokia 8.3",
        "brand": "Nokia",
        "price": 699,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4500mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Nokia+8.3"
    },
    {
        "model": "Vivo X60",
        "brand": "Vivo",
        "price": 599,
        "specs": {
            "RAM": "8GB",
            "storage": "128GB",
            "battery": "4300mAh"
        },
        "image": "https://dummyimage.com/200x400/000/fff&text=Vivo+X60"
    }
]

for (let i = 0; i < mobileDetail.length; i++) 
 {
         mainDiv.innerHTML += `<div class="sec-main-div"> <div class="card" style="width: 18rem; margin: 10px; display: flex;">
      <img src="${mobileDetail[i].image}" class="card-img-top" alt="${mobileDetail[i].model}">
      <div class="card-body">
        <h5 class="card-title">${mobileDetail[i].brand} ${mobileDetail[i].model}</h5>
        <p class="card-text">Price: $${mobileDetail[i].price}</p>
        <p class="card-text">RAM: ${mobileDetail[i].specs.RAM}</p>
        <p class="card-text">Storage: ${mobileDetail[i].specs.storage}</p>
        </div>;
        </div>;
        </div>`;
      
 }
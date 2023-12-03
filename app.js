const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 129,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 111,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 123,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 110,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];


let choosenProduct = products[0] ;

const curProductImg = document.querySelector(".productImg");
const curProductTitle = document.querySelector(".productTitle");
const curProductPrice = document.querySelector(".productPrice");
const curProductColors = document.querySelectorAll(".color");
const curProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, position) => {
item.addEventListener('click', () => {
wrapper.style.transform = `translateX(${-100 * position}vw)`;


choosenProduct = products[position];

curProductTitle.textContent = choosenProduct.title;
curProductPrice.textContent = choosenProduct.price + '$';
curProductImg.src = choosenProduct.colors[0].img;
curProductColors.forEach((color, i) => {
  color.style.backgroundColor = choosenProduct.colors[i].code;

})

});

});

curProductColors.forEach((color,i) => {
  color.addEventListener("click" , () => {
curProductImg.src = choosenProduct.colors[i].img
  });

});


curProductSizes.forEach((size,i)=> {
  size.addEventListener("click", () => {
    curProductSizes.forEach(size => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
size.style.backgroundColor = "black";
size.style.color = "white"
});
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener('click', () => {
payment.style.display = "flex"

});

close.addEventListener('click', () => {
  payment.style.display = "none"
  
  });


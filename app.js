const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let buttonDOM = document.querySelector('.btn-container');
let menus = ['All', 'Korea', 'Japan', 'China'];

menus.forEach((currentValue,index) => {
 let buttons = document.createElement('button') 
 buttons.id = currentValue
 buttons.innerText = currentValue
 buttons.classList = 'btn-item btn btn-outline-dark d-inline'
 
 const buttonss = document.querySelector(".btn-container")
 buttonss.appendChild(buttons)
  
});

let all = document.querySelector('#All')
all.addEventListener('click', click)

let korea = document.querySelector('#Korea')
korea.addEventListener('click', click)

let japan = document.querySelector('#Japan')
japan.addEventListener('click', click)

let china = document.querySelector('#China')
china.addEventListener('click', click)

function array(arrayName){
  arrayName.map(index => {
    let menuDOM = document.querySelector('.section-center');

    let divs = document.createElement('div');
    divs.classList = 'menu-items col-6  ';
    menuDOM.appendChild(divs);

    let img = document.createElement('img');
    img.classList = 'photo';
    img.src =index.img;
    divs.appendChild(img);

    let divİnfo = document.createElement('div');
    divİnfo.classList = 'menu-info';
    divs.appendChild(divİnfo);


    let divTittle = document.createElement('div');
    divTittle.classList = 'menu-title';
    divİnfo.appendChild(divTittle);

    let tittle = document.createElement('h4');
    let price = document.createElement('h4');
    tittle.innerHTML = index.title;

    price.classList = 'price';
    price.innerHTML= index.price;
    divTittle.appendChild(tittle);
    divTittle.appendChild(price);

    let divText = document.createElement('div');
    divText.classList = 'menu-text';
    divText.innerHTML = index.desc;
    divİnfo.appendChild(divText);
  })
}
  
let grup = 'category'
sorting = menu.reduce((acc, menuElemanı) => {
let key = menuElemanı[grup]

if(!acc[key]){
acc[key] = []
}
acc[key].push(menuElemanı)
return acc
}, {})


let body = document.querySelector('.section-center')
function click(){
  while(body.hasChildNodes()){
    body.removeChild(body.firstChild)
  }
  ;
  if(this.id == 'All'){
    array(menu)
  }else if (this.id == 'Korea'){
    array(sorting.Korea)
  }else if(this.id == 'Japan'){
    array(sorting.Japan)
  }else if(this.id == 'China'){
    array(sorting.China)
  }
}
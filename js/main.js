let search = document.querySelector('.search');
let ul = document.querySelector('ul');

let arr = [
    {
        src:"/imgs/download (1).jpg",
        name:"mariem",
        location: 'Reisjärvi, Finland'
    },
    {
        src:"/imgs/Eagle.jpg",
        name:"Isaiah Foster",
        location: 'Pasadena, United States'
    },
    {
        src:"/imgs/flower.jpg",
        name:"Emilie Mortensen",
        location: 'Århus C., Denmark'
    },
    {
        src:"/imgs/wallpaper computer.jpg",
        name:"mariem",
        location: 'Reisjärvi, Finland'
    },
    {
        src:"/imgs/sky.jpg",
        name:"Alan Simpson",
        location: 'Brighton and Hove, United Kingdom'
    },
    
];

function add(users){
    let items = users.map(item=>{
        return `
        <li>
        <img src="${item.picture.large}" alt="">
        <div class="info">
          <h4 class="name">${item.name.first} ${item.name.last}</h4>
          <span class="location">${item.location.street.name}</span>
        </div>
      </li>
        `
    }).join('');
    ul.innerHTML = items;
}
// add(users);

function addUser(arr){
    let items = arr.map(item=>{
        return `
        <li>
        <img src="${item.src}" alt="">
        <div class="info">
          <h4 class="name">${item.name}</h4>
          <span class="location">${item.location}</span>
        </div>
      </li>
        `
    }).join('');
    ul.innerHTML = items;
}
// addUser(arr)

let ulLi = document.querySelectorAll('ul li');
ulLi = [...ulLi]
console.log(ulLi);


search.addEventListener('keyup',result);

function result(){
    let value = (this.value).trim().toLowerCase();
    let data = fetch('https://randomuser.me/api?results=50')
    .then(res=> res.json())
    .then(data=>data.results)
    .then(ele=>{
        let res = ele.filter(item=>{
            // console.log(value.toLowerCase().trim());
            if(item.location.street.name.includes(value)||item.name.last.toLowerCase().includes(value)||item.name.first.toLowerCase().includes(value)){
            //    console.log(ele)
                return ele;
            }
        });
        console.log(res);
        add(res);
    })
   

   
    
    // addUser(arr);
}
let data = fetch('https://randomuser.me/api?results=50')
    .then(res=> res.json())
    .then(data=>data.results)
    .then(ele=>{
        add(ele);
        return ele;
    });
    console.log(data)


// 'https://randomuser.me/api?results=50'
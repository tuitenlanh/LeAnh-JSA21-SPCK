let sum = 0;
function sumc(){
    sum+=1
    console.log(sum);

}
const imgShow =[
   '../../img/banner1.jpg',
   '../../img/banner2.jpg',
   '../../img/banner3.jpg',
]

let i = 0
function slideShow() {
    if(i==imgShow.length) i=0
    let img = document.querySelector('.show')
    img.src = imgShow[i]
    i++;
    console.log(1);
}
setInterval(slideShow,3000)

const read = document.querySelector('.product')
fetch('http://localhost:3000/Product')
    .then((response) => response.json())
    .then((data) => {
        for (product of data) {
            read.innerHTML +=`
            <div class="card" style="width: 18rem;">
            <img src="${product.id}" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
            `
        }
    })
    
    const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
if (user) {
    const btn = document.querySelector('.btn');
    btn.innerHTML = `
    <p>Name :  ${user.name}</p>
    
    `
} else {
    const btn = document.querySelector('.btn');
    btn.innerHTML = `
    <button>Đăng nhập</button>
    <button>Đăng ký</button>
    
    `

}

if (user.role != 2) {
    const admin = document.querySelector('.admin');
    admin.innerHTML = `<p>Bạn không phải là admin</p>`
} 
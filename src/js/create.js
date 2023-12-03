const add = () => {
let name = document.querySelector('.name').value;
let price = document.querySelector('.price').value;
let description = document.querySelector('.description').value;

const data = {
    name:name,
    price:price,
    description:description,
}

fetch('http://localhost:3000/Product', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
})
window.location.href = '../html/dashboard product.html'

alert("thanh cong");
console.log(1);
};



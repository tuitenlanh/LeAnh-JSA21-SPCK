//read - hiển thị
const READ = (data)=>{
    const read = document.querySelector('tbody');
    fetch(`http://localhost:3000/${data}`)
        .then(response => response.json())
        .then((datas) => {
        for (let product of datas) {
            read.innerHTML += `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td><a href=""><button type="button" class="btn btn-danger" onclick="deleteProduct (${product.id})">xoa</button></td>

            </tr>
            `
        }
    })
};
READ("Product")


const deleteProduct = (id) => {
    const check = window.confirm("ban co chac muon xoa khong");
   if(check) {
    fetch(` http://localhost:3000/Product/${id}`,{
        method: 'DELETE'
   })
   alert("thanh cong")
}
}
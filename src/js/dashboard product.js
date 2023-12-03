const READ = (data) => {
    const read = document.querySelector('tbody')
    fetch(`http://localhost:3000/Product`)
        .then(response => response.json())
        .then((datas) => {
            for (let product of datas) {
                read.innerHTML +=`
                <tr>
                <th scope="row">${product.id}</th>
                <td><img class="imgdb" src="${product.image}"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td><button type="button" class="btn btn-outline-danger" onclick="deleteProduct(${product.id})">Delete</button>
                <a href="../html/updateproduct.html?id=${product.id}"><button type="button" class="btn btn-outline-info">Update</button></a></td>
              </tr>
                `
            }
        })
};
READ("Product")
// const updateProduct = (id) => {
//     fetch(`http://localhost:3000/Product/${id}`, {
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataUpdate)
//     })
// };
//DELETE | Xóa
const deleteProduct = (id) => {
    const check = window.confirm("Bạn có chắc chắn muốn xoá sản phẩm không?");
    if(check) {
        fetch(`http://localhost:3000/Product/${id}` ,{
            method:'DELETE'
        })
        alert("Bạn đã xoá sản phẩm thành công")
    }
};
const READ = (data) => {
    const read = document.querySelector('tbody')
    fetch(`http://localhost:3000/users`)
        .then(response => response.json())
        .then((datas) => {
            for (let users of datas) {
                read.innerHTML +=`
                <tr>
                <th scope="row">${users.id}</th>
                <td>${users.name}</td>
                <td>${users.email}</td>
                <td>${users.password}</td>
                <td>${users.role}</td>
                <td><button type="button" class="btn btn-outline-danger" onclick="deleteProduct(${users.id})">Delete</button>
                <a href="../html/updateuser.html?id=${users.id}"><button type="button" class="btn btn-outline-info">Update</button></a></td>
              </tr>
                `
            }
        })
};
READ("users")
// const updateProduct = (id) => {
//     fetch(`http://localhost:3000/users/${id}`, {
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
        fetch(`http://localhost:3000/users/${id}` ,{
            method:'DELETE'
        })
        alert("Bạn đã xoá sản phẩm thành công")
    }
};
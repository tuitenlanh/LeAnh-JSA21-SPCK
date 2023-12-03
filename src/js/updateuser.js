const id = new URLSearchParams(window.location.search).get('id');
const showUser = (id) => {
    const update = document.querySelector('.app');
    fetch(`http://localhost:3000/users/${id}`)
        .then(response => response.json())
        .then((data) => {
            update.innerHTML = `
            <div class="mb-3">
            <label for="exampleInputName1" class="form-label text">Name</label>
            <input type="text" class="form-control description" id="exampleInputPassword1">
          </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text">Email</label>
                <input type="email" class="form-control name" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1"  class="form-label text">Password</label>
                <input type="number" class="form-control price" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                <label for="exampleInputRole1" class="form-label text">Role</label>
                <input type="text" class="form-control description" id="exampleInputPassword1">
              </div>
              <button type="submit" class="btn btn-primary text" onclick="updateUser(${id})">Submit</button>`
        })
}
showUser(id)
const updateProduct = (id) => {
    // const image = document.querySelector('.image').value;
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.price').value;
    const password = document.querySelector('.description');
    console.log(description.value);
    console.log(description);
    const dataUpdate = {
        name,
        price,
        description
    }
    console.log(dataUpdate);
    // fetch(`http://localhost:3000/Product/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataUpdate)
    // })
    // window.location.href = '../html/test.html'
};
const id = new URLSearchParams(window.location.search).get('id');
const showProduct = (id) => {
    const update = document.querySelector('.app');
    fetch(`http://localhost:3000/Product/${id}`)
        .then(response => response.json())
        .then((data) => {
            update.innerHTML = `
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text">image</label>
            <input type="text" class="form-control image" id="exampleInputPassword1">
          </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text">Name</label>
                <input type="email" class="form-control name" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1"  class="form-label text">Price</label>
                <input type="number" class="form-control price" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text">description</label>
                <input type="text" class="form-control description" id="exampleInputPassword1">
              </div>
              <button type="submit" class="btn btn-primary text" onclick="updateProduct(${id})">Submit</button>`
        })
}
showProduct(id)
const updateProduct = (id) => {
    const image = document.querySelector('.image').value;
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    const description = document.querySelector('.description').value;
    console.log(description.value);
    console.log(description);
    const dataUpdate = {
        image,
        name,
        price,
        description
    }
    console.log(dataUpdate);
    fetch(`http://localhost:3000/Product/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUpdate)
    })
    window.location.href = '../html/dashboard product.html'
};
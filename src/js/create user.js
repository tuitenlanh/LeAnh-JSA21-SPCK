const add = () => {
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let role = document.querySelector('.role').value;

    
    const data = {
        name:name,
        email:email,
        password:password,
        role:role,
    }
    
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    alert("thanh cong");
    window.location.href = '../html/dashboard product.html'
    };
    
    fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data)=>{
            console.log("data ALL", data);
        })
    
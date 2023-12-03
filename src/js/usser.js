const sign_up = () => {
    const name = document.querySelector('#exampleInputName1').value;
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    console.log(email, password);
    const user = {
        name,
        email,
        password,
        role: 2
    }  
     console.log(user);
    fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    alert("đăng kí thành công");
    window.location.href = "index.html";
}
const log_in = () => {
    const email = document.querySelector('#exampleInputEmail1').value;
    const password = document.querySelector('#exampleInputPassword1').value;
    fetch('http://localhost:3000/users')
        .then(Response=>Response.json())
        .then((data)=>{
            console.log(data);
            for(let user of data) {
                if(((user.email==email) && (user.password==password))||((user.name==name) && (user.password==password))) {
                    localStorage.setItem("user" , JSON.stringify(user))
                    window.location.href = 'trang chu.html';
                    return;
                } 

            }
            alert("đăng nhập thất bại")

        })
    }
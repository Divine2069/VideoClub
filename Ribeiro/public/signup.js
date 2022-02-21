
window.onload = setup

function setup() {
    document.getElementById("btnInsert")
        .addEventListener('click', putSignup)
}

async function putSignup() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const resp = await fetch('/signup', {
        method: 'put',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (resp.status != 201) {
        alert("User already exists")
    }else{
        alert(username+ 'registered with success!!')
        document.location.href = '/login' 
    }
    
}
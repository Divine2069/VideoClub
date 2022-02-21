window.onload = setup

function setup() {
    document.getElementById("btnInsert")
        .addEventListener('click', putLogin)
}

async function putLogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const resp = await fetch('/login', {
        method: 'post',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (resp.status == 401) {
        alert("Bad credentials")
    } else {
        document.location.href = '/'
        alert("Welcome " + username)
    }
}
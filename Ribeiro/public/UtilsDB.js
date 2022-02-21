window.onload = setup

function setup() {

    const arrayBtnDelete = document.querySelectorAll(".btn-danger")

    arrayBtnDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', () => deleteStudent(btnDelete))
    })
    document.getElementById('btnInsert')
        .addEventListener('click', insertStudent)

    const arrayImgArrow = document.querySelectorAll(".imgArrow")
    arrayImgArrow.forEach((elemImg) => elemImg.addEventListener('click', () => showDetails(elemImg)))
}
/**
 * 
 * @param {Element} btnDelete 
 */
async function deleteStudent(btnDelete) {
    const stdId = btnDelete.dataset.stdId
    const url = '/students/' + stdId
    await fetch(url, {
        method: 'delete'
    })
    btnDelete.parentElement.parentElement.remove()
}

function insertStudent() {
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const course = document.getElementById('course').value
    if (name && age) {
        const url = '/students/insert'
        fetch(url, {
            method: 'put',
            body: JSON.stringify(
                {
                    name: name,
                    age: age,
                    course: course
                }
            ),
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            if (res.status == 201) {
                alert(`Student ${name} inserted with success`)
                document.location.reload()
            }
            else {
                alert(res.erro)
            }
        })
    } else {
        if (!name)
            alert('Insert student name !!')
        if (!age)
            alert('Insert student age !!')
    }
}
/**
 * 
 * @param {Element} elemImg
 */
function showDetails(elemImg) {
    const td = elemImg.parentElement
    const div = td.lastElementChild
    if (div.style.display === "none") {
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
}


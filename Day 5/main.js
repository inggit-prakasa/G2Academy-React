let i = 1
let data = [
    {
        name : "admin",
        password : "admin",
        address : "bogor",
        worker : "administrator",
        role : "HRD"
    }
]

saveform = () => {
    let datatemp = {}

    datatemp.name = document.biodata.username.value
    datatemp.address = document.biodata.password.value
    datatemp.password = document.biodata.address.value
    datatemp.worker = document.biodata.worker.value
    datatemp.role = document.biodata.role.value

    var id = checkUsername(name.value)

    if(id != null) {
        console.log("Username sudah digunakan")
    } else {
        data.push(datatemp)
    }

    show()
}

editform = () => {
    var id = checkUsername(document.biodata.username.value)

    data[id].name = document.biodata.username.value
    data[id].address = document.biodata.address.value
    data[id].worker = document.biodata.worker.value
    data[id].role = document.biodata.role.value

    document.getElementById('saveRow').style.display = 'inline';
    document.getElementById('editRow').style.display = 'none';
    document.getElementById('username').disabled = false;

    show()
}

editRow = (id) => {
    document.getElementById('saveRow').style.display = 'none';
    document.getElementById('editRow').style.display = 'inline';
    document.getElementById('username').disabled = true;


    document.biodata.username.value = data[id].name
    document.biodata.address.value = data[id].address
    document.biodata.worker.value = data[id].worker
    document.biodata.role.value = data[id].role
}

show = () => {
    const div1 = document.getElementById("tambah")
    div1.innerHTML = ""
    div1.innerHTML += `
                    <tr>
                    <td>No</td>
                    <td>Username</td>
                    <td>Alamat</td>
                    <td>Pekerjaan</td>
                    <td>Role</td>
                    <td>Action</td>
                </tr>
    `
    for (let j = 0; j < data.length; j++) {
        div1.innerHTML += `<tr>
                                <td>${j+1}</td>
                                <td>${data[j].name}</td></td>
                                <td>${data[j].address}</td>
                                <td>${data[j].worker}</td>
                                <td>${data[j].role}</td>
                                <td>
                                    <button class="btn btn-info p-2" onclick="editRow(${j})">Edit</button>
                                    <button class="btn btn-danger p-2" onclick="deleteRow(${j})">Delete</button>
                                </td>
                           </tr> `
    }
    document.getElementById("form").reset();
}

deleteRow = (id) => {
    data.splice(id,1)
    show()
}

checkUsername = (name) => {
    let flag = null
    for(let i=0; i < data.length; i++) {
        if(name == data[i].name) {
            flag = i
        }
    }
    return flag
}

loginForm123 = () => {
    console.log(document.loginData.usernameLogin.value)
    const loginData = data.find( ({ name,password }) => name === document.loginData.usernameLogin.value && document.loginData.passwordLogin.value )
    if (loginData) {
        if (loginData.role === "HRD") {
            alert("Login Berhasil")
            show()
            document.getElementById('tableData').style.display = "block"
            document.getElementById('login').style.display = "none"
        } else {
            // biodata()
            document.getElementById('tableData').style.display = "block"
            document.getElementById('login').style.display = "none"
            document.getElementById('biodataKaryawan').style.display = "block"
        }

    } else {
        alert("Login Gagal Coba Lagi")
    }
}
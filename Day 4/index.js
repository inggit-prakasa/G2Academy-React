let i = 1
let data = [
    {
        name : "admin",
        password : "admin",
        address : "bogor",
        worker : "administrator",
        hobbies : ["Coding", "Baca Buku"]
    }
]

show()

function saveform() {
    let name = document.biodata.username
    let address = document.biodata.address
    let worker = document.biodata.worker
    var input = document.getElementsByName('hobby[]');

    let data = {}
    let tempHobby = []
    for (let k = 0; k < input.length; k++) {
        tempHobby.push(input[k].value)
    }

    data.name = name.value
    data.address = address.value
    data.worker = worker.value
    data.hobbies = tempHobby

    var id = checkUsername(name.value)

    if(id != null) {
        console.log("Username sudah digunakan")
    } else {
        data.push(data)
    }

    show()
}

function editform() {
    let name = document.biodata.username
    let address = document.biodata.address
    let worker = document.biodata.worker
    var input = document.getElementsByName('hobby[]');

    console.log("input length : ",input.length)
    let data = {}
    let tempHobby = []
    for (let k = 0; k < input.length; k++) {
        tempHobby.push(input[k].value)
    }
    data.name = name.value
    data.address = address.value
    data.worker = worker.value
    data.hobbies = tempHobby

    var id = checkUsername(name.value)
    deleteRow(id)

    data.push(data)

    document.getElementById('saveRow').style.display = 'inline';
    document.getElementById('editRow').style.display = 'none';
    document.getElementById('username').disabled = false;

    show()
}

function editRow(id) {
    document.getElementById('saveRow').style.display = 'none';
    document.getElementById('editRow').style.display = 'inline';
    document.getElementById('username').disabled = true;


    document.biodata.username.value = data[id].name
    document.biodata.address.value = data[id].address
    document.biodata.worker.value = data[id].worker
    // document.biodata.hobby[].value = data[id].hobbies
    document.getElementsByName('hobby[]').value = data[id].hobbies
}

function add_field(){

    var x = document.getElementById("hobbies");

    x.innerHTML += `
        <div class="row my-2">
            <div class="col-md-6">
                <input type="text" class="form-control" name="hobby[]" id="hobby[]" placeholder="Masukan Hobby">
            </div>
            <div class="col-md-2">
                <input type="button"  class="btn btn-info" onclick="add_field()" value="Add">
            </div>
        </div>
    `
}

function show() {
    const div1 = document.getElementById("tambah")
    div1.innerHTML = ""
    div1.innerHTML += `
                    <tr>
                    <td>No</td>
                    <td>Username</td>
                    <td>Alamat</td>
                    <td>Pekerjaan</td>
                    <td>Hobby</td>
                    <td>Action</td>
                </tr>
    `
    let page = data.length % 4
    for (let j = 0; j < data.length; j++) {
        div1.innerHTML += `<tr>
                                <td>${j+1}</td>
                                <td>${data[j].name}</td></td>
                                <td>${data[j].address}</td>
                                <td>${data[j].worker}</td>
                                <td>${data[j].hobbies}</td>
                                <td>
                                    <button class="btn btn-info p-2" onclick="editRow(${j})">Edit</button>
                                    <button class="btn btn-danger p-2" onclick="deleteRow(${j})">Delete</button>
                                </td>
                           </tr> `
    }
    document.getElementById("form").reset();
}

function deleteRow(id) {
    data.splice(id,1)
    show()
}

function checkUsername(name) {
    let flag = null
    for(let i=0; i < data.length; i++) {
        if(name == data[i].name) {
            flag = i
        }
    }
    return flag
}
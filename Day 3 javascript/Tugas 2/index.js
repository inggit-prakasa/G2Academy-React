function login() {
    document.getElementById("login").style.display = 'none';
    document.getElementById("kalkulator").style.display = 'inline-block';
}

function perkalian() {
    var angka1 = document.getElementById("firstNum").value;
    var angka2 = document.getElementById("secondNum").value;
    document.getElementById("hasil").value = angka1 * angka2;
}

function pembagian() {
    var angka1 = document.getElementById("firstNum").value;
    var angka2 = document.getElementById("secondNum").value;
    document.getElementById("hasil").value = angka1 / angka2;
}
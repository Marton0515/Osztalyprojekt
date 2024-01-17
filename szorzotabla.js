const gomb = document.getElementById("gomb")

gomb.addEventListener("click",()=>{
    let number = document.getElementById("number").value;
    let tabla = "<p>";
    for (let i = 1; i <= 10; i++) {
        tabla += i+" x "+number+"="+i*number+"<br>";
    }
    tabla += "</p>";
    document.getElementById("displayszorzo").innerHTML = tabla;
    })

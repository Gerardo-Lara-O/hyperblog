const calculo1 = document.querySelector("#input1");
const calculo2 = document.querySelector("#input2");
const btn = document.querySelector("#btnCalcular");
const res = document.querySelector("#respuesta");

btn.addEventListener('click', calcular);

function calcular(){
    const suma = Number(input1.value) + Number(input2.value);
    res.innerText = "Este es el resultado: " + suma;

}
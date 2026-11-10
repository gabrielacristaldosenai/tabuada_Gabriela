let calcular = document.querySelector("#calcular");
calcular.addEventListener("click", calculo);


function calculo() {
    let num = document.querySelector("#num");
    let n1 = Number(num.value);

    let resultado = document.querySelector("#resultado");
    let resp = "";

    for (let tabu = 1; tabu <= 10; tabu++) {
        resp += `${n1} x ${tabu} = ${n1 * tabu} <br>`;
    }
    resultado.innerHTML = resp;
}
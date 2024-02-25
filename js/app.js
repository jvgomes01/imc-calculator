const altura = document.querySelector("#number-altura").value;
const peso = document.querySelector("#number-peso").value;
const bntCalcular = document.querySelector("#calcular");
const bntLimpar = document.querySelector("#limpar");



function calcular(){
    const imc = ((peso / altura)/altura)
    console.log(imc)
}



bntCalcular.addEventListener("click", () => {
    console.log("clicou")
    calcular()
})


bntLimpar.addEventListener("click", () => {
    console.log("clicou")
})
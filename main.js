function factorial(n){
    if(n === 1 || n === 0){
        return 1;
    }
    return (factorial(n-1) * n);
}
function combinaciones(conjunto, subconjunto){
    return factorial(conjunto)/(factorial(conjunto - subconjunto) * factorial(subconjunto));
}
function permutaciones(conjunto, subconjunto){
    return factorial(conjunto)/factorial(conjunto - subconjunto);
}
function calculate(){
    if(document.querySelector("#n").value === '' || document.querySelector("#r").value === ''){
        alert("Por favor, complete los campos");
        return;
    }
    const conjunto = Number(document.querySelector("#n").value);
    const subconjunto = Number(document.querySelector("#r").value);
    if(conjunto < subconjunto){
        alert('El conjunto no puede ser menor que el subconjunto');
        return;
    }
    const resCom = combinaciones(conjunto, subconjunto);
    const resPer = permutaciones(conjunto, subconjunto);
    document.querySelector(".respuestas").classList.add("listo");

    document.querySelector("#resCom").innerText = `Existen ${resCom} combinaciones posibles`;
    document.querySelector("#resPer").innerText = `Y ${resPer} permutaciones posibles`;
    if(resCom === 1){
        document.querySelector("#resCom").innerText = `Existe ${resCom} combinación posible`; 
    }
    if(resPer === 1){
        document.querySelector("#resPer").innerText = `Y ${resPer} permutación posible`; 
    }
}
function limpiar(){
    document.querySelector("#n").value = "";
    document.querySelector("#r").value = "";
    document.querySelector(".respuestas").classList.remove("listo");
}
document.querySelector("#calculate").addEventListener("click", calculate);
document.querySelector("#clear").addEventListener("click", limpiar);
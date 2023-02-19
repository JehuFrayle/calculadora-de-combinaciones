# Calculadora de combinaciones y permutaciones
En esta página encontrarás información acerca de las combinaciones y permutaciones, así como una calculadora para calcular ambas.

## Como funciona
He utilizado recursividad para crear una función factorial. Esta función es recursiva porque, partiendo de la premisa de que el factorial de 0 y 1 es 1, calcula el factorial de un número n multiplicando n por el factorial de n-1.

Posteriormente utilicé esta función factorial para implementar las funciones que calculan las combinaciones y permutaciones posibles. Hay más información de las fórmulas utilizadas en la página web *(Por ahora no... me falta agregarla)*.

```javascript
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
```
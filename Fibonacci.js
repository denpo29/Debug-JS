/*Crea un nuevo fichero JS que contenga las siguientes líneas

- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números 
de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función*/

let a = 0
let b = 1

function fibonacci(num){
    for (let i = 0; i < num; i++){
        console.log(a)
        let c = a + b;
        a = b;
        b = c;
    }
}

let fib = fibonacci(7)
console.log(fib)



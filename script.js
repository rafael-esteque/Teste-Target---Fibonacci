var fib = [0, 1];
for(var i=fib.length; i<20; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 

const numero = prompt('Informe um número')
console.log(fib.includes(parseInt(numero)));
if (fib.includes(parseInt(numero))) {
  alert('O número é Fibonacci!')
} else {
  alert('O número não é Fibonacci!')
}
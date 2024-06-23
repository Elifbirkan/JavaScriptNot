let fib = [1,1];

for(let i=2; i<10; i++){
    fib[i] = fib[i-1]+fib[i-2];
}
console.log("Fibonacci serisinin ilk 10 terimi: ", fib);
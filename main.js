let n1 = document.getElementById("num1")
let r = document.getElementById("result")

console.log(n1)
console.log(r)

function displayData(){
    let n = parseInt(n1.value)
    r.innerHTML = n+"! "+ " = "+fac(n);
}

function displayfac() {
    let n = parseInt(n1.value)
    r.innerHTML = n+"! "+" = "+Fibonacci(n);
}

function fac(n){
    if(n == 0 ){
        return 0;
    }
    else{
        return n+fac(n-1);
    }
}

function Fibonacci(n){
    if( n == 1){
        return 0;
    }

    else if ( n == 2){
        return 1;
    }
    else {
        return Fibonacci(n-2)+Fibonacci(n-1);
    }
}
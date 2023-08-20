
var x = prompt("ingresa un numero aquí ")
var y = prompt("ingresa otro aquí ")

x = parseInt(x)
y = parseInt(y)

var respuesta1 = (x+=y);
var respuesta2 = (x-=y);
var respuesta3 = (x*=y);
var respuesta4 = (x/=y);
var respuesta5 = (x**=y);
var respuesta6 = (x%=y);
var respuesta7 = (x>y);
var respuesta8 = (x<=y);
var respuesta9 = (x==y);

console.log(x+=y)
console.log(x-=y)
console.log(x*=y)
console.log(x/=y)
console.log(x**=y)
console.log(x%=y)
console.log(x>y)
console.log(x<y)
console.log(x==y)

alert("El resultado es: " + respuesta1);
alert("El resultado es: " + respuesta2);
alert("El resultado es: " + respuesta3);
alert("El resultado es: " + respuesta4);
alert("El resultado es: " + respuesta5);
alert("El resultado es: " + respuesta6);
alert("El resultado es: " + respuesta7);
alert("El resultado es: " + respuesta8);
alert("El resultado es: " + respuesta9);


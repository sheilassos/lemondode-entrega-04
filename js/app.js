var num1 = () => document.getElementById("input-num1").value;
var num2 = () => document.getElementById("input-num2").value;

var result;

var add = () => {
    result = num1()*1 + num2()*1;
    finalResult();
};
/* C O M E N T A R I O
He multiplicado los num*1 porque me lo cogía como string al realizar la suma.
En el vídeo el profesor pasa función para realizar el cambio a través del chat,
pero el archivo del chat no está subido.
*/
var substract = () => {
    result = num1() - num2();
    finalResult();
};
var multiply = () => {
    result = num1() * num2();
    finalResult();
};
var divide = () => {
    result = num1() / num2();
    finalResult();
};

function finalResult () {
    document.getElementById("result").className= ("final-result");
    
    if (num1() == "" || num2() == ""){
    document.getElementById("result").innerText= ("Error, introduce dos valores");
    } else {
    document.getElementById("result").innerHTML= ("= " + result);
};
};

// Registro de eventos

document.getElementById("add").addEventListener("click", add);
document.getElementById("substract").addEventListener("click", substract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

document.getElementById("input-num1").addEventListener("change", num1);
document.getElementById("input-num2").addEventListener("change", num2);
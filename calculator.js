function Clear() {
    var b = document.getElementById("answer");
    b.value = '';
}
function percent() {
    calc.display.value = calc.display.value/100;
}
function cube() {
    calc.display.value = calc.display.value ** 3;
}
function Return() {
    var R = document.getElementById("answer");
    R.value = R.value.slice(0,-1);
}
function Result() {
    const display = document.getElementById("answer");
    try{
        const data = eval(display.value);
        display.value = data;
    }
    catch(error) {
        display.value = "Error";
        alert("invalid expression please check")
    }
}
function sqrt() {
    calc.display.value = Math.sqrt(calc.display.value);
}
function Sq() {
    calc.display.value = calc.display.value ** 2;
}
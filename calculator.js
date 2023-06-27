function Clear() {
    var b = document.getElementById("answer");
    b.value = '';
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
    }
}
function sqrt() {
    calc.display.value = Math.sqrt(calc.display.value);
}
function Sq() {
    calc.display.value = calc.display.value ** 2;
}


var z = 0;
function add() {
    var x = Number(document.getElementById('num11').value);
    var y = Number(document.getElementById('num22').value);

    z = x + y;

}


function sub() {
    var x = Number(document.getElementById('num11').value);
    var y = Number(document.getElementById('num22').value);

    z = x - y;

}


function mul() {
    var x = Number(document.getElementById('num11').value);
    var y = Number(document.getElementById('num22').value);

    z = x * y;
}


function div() {
    var x = Number(document.getElementById('num11').value);
    var y = Number(document.getElementById('num22').value);

    z = x / y;

}

function compute() {
    document.getElementById('ans33').value = z;
}
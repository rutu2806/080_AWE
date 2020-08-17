// function post() {
//     let a = document.querySelector("#inp1").value;

//     let b = document.querySelector("#refid").cloneNode(true);

//     b.removeAttribute("id");

//     b.children[0].innerHTML = a;

//     let commentbox = document.querySelector('#refid');

//     commentbox.appendChild(b);

// }


function post() {
    var newelement = document.createElement('div');
    var newchild = document.querySelector('#inp1').value;
    newelement.textContent = newchild;
    document.querySelector('#refid').appendChild(newelement);
    newelement.style.border = " 2px solid black";

    document.querySelector('#inp1').value = " ";
}

function comdelete(btnelement) {
    btnelement.document.querySelector
}


function post2() {
    var newelement = document.createElement('div');
    var newchild = document.querySelector('#inp2').value;
    newelement.textContent = newchild;
    document.querySelector('#refid2').appendChild(newelement);
    newelement.style.border = " 2px solid black";

    document.querySelector('#inp2').value = " ";
}

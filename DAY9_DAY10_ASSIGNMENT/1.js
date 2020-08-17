// COLUMN-1

function submit() {
    let u = document.querySelector("#usn").value;
    let p = document.querySelector("#psw").value;

    let uc = /^[A-Za-z0-9]{5,15}$/
    let pc = /^([A-Z]{1,1}) ([0-9]{1,3}) ([a-z]{3,10}) ([@#]{1,1})$/

    if (uc.test(u)) {
        alert("valid");
    }
    else {
        alert("INVALID USERNAME : Username must contain A-Z a-z 0-9");
    }



    if (pc.test(p)) {
        alert("valid");
    }
    else {
        alert("INVALID PASSWORD : Password must contain A-Z a-z 0-9 @ #");
    }

}

// COLUMN-2

let likeCounter = 0;
let dislikeCounter = 0;

function like() {

    let l = document.querySelector("#thumpsup");
    likeCounter++;
    l.innerHTML = likeCounter + "&#128077";
}

function dislike() {

    let l = document.querySelector("#thumpsdown");
    dislikeCounter++;
    l.innerHTML = dislikeCounter + "&#128078";
}


function commentBox() {
    // let inputComment = document.querySelector("#comment1").value;

    // // create new container
    // let d = document.createElement('div');

    // d.textContent = inputComment;

    // let h = document.querySelector("#commentContainer");

    // h.appendChild(d);

    // h.insertBefore(d, commentContainer.firstChild);

    let inputComment = document.querySelector("#comment1").value;

    let x = document.querySelector("#commentContainer").cloneNode(true);

    x.removeAttribute('id');

    x.children[0].innerHTML = inputComment;

    let y = document.querySelector("#outputcomment");

    y.appendChild(x);

}

function remove(btnElement) {
    btnElement.parentElement.parentElement.lastChild.remove();
}















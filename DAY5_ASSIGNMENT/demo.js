function handleMouseOver() {
    console.log("I have successfully called");
    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "pink";
    id2Element.style.color = "black";
    id2Element.innerHTML = "HELLO CDACIANS";
}


function handleMouseOut() {
    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "grey";
    id2Element.style.color = "black";
    id2Element.innerHTML = "HELLO WORLD";

}



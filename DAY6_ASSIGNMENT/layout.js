var likcount = 0;
var discount = 0;

function like() {
    let likeCount = document.querySelector('#like');
    likcount++;
    likeCount.innerHTML = "Like" + likcount;

}

function Dislike() {
    let DislikeCount = document.querySelector('#dislike');
    discount++;
    DislikeCount.innerHTML = "Dislike" + discount;

}

function comment() {
    let inpValue = document.querySelector("#inp").value;
    let cloneValue = document.querySelector("#placeComment").cloneNode(true);
    cloneValue.innerHTML = inpValue;

    let commentsDiv = document.querySelector("#commentDiv");

    commentsDiv.insertBefore(cloneValue, commentsDiv.firstChild);
}
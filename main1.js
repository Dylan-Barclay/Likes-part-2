var countElement = document.querySelector("#NumberOfLikes")
var count = 0;

function add1() {
    count++;
    countElement.innerText = count + " " + "Like(s)";
}
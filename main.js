var countElement = document.querySelector("#NumberOfLikes")
var countElement2 = document.querySelector("#NumberOfLikes_2")
var countElement3 = document.querySelector("#NumberOfLikes_3")
var count1 = 0;
var count2 = 0;
var count3 = 0;

function add1() {
    count1++;
    countElement.innerText = count1 + " " + "Like(s)";
}

function add2() {
    count2++;
    countElement2.innerText = count2 + " " + "Like(s)";
}

function add3() {
    count3++;
    countElement3.innerText = count3 + " " + "Like(s)";
}
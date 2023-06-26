document.body.setAttribute("class","gridBody");
let controlsDiv = document.getElementsByClassName('column is-2-desktop is-12-tablet is-12-mobile')[0];
controlsDiv.style.width = 'auto';
document
    .getElementsByClassName("generate")[0]
    .addEventListener("click", runstuff);

function sValueGenerator(chosenValue, binarySequence) {
    let a = "";
    binarySequence.forEach(function(item, index) {
        a +=
            `<span class='sValue ${chosenValue === index ? "highlightItem" : ""}'>` +
            item +
            "</span>";
    });
    return a;
}

function runstuff() {
let j = document.getElementsByClassName("input")[0].value;
    let copyj = j;
    j = Number(j);
    const isInteger = Number.isInteger(j);
if(copyj && isInteger && j>=0 && j<11){
    
    let list = [];
    let list3 = [];
    let s = [];
    for (let i = 0; i < j; i++) {
        list[i] = Math.floor(Math.random() * 2 ** j)
            .toString(2)
            .padStart(j, "0");
        let list2 = Array.from(String(list[i]), Number);
        s.push(list2[i] ^ 1);
        list3[i] = list2;}
    
    let cantorEl = document.getElementById("cantorId");
    cantorEl.innerHTML = "";
    cantorEl.classList.add("cantorTable");
    for (let i = 0; i < j; i++) {
        let item = document.createElement("p");
        item.innerHTML =
            "<span class='sKey'>" +
            (i + 1) +
            "</span>" +
            "<span class='equalSign'>=</span>" +
            sValueGenerator(i, list3[i]) +
            "<span>. . .</span>";
        item.classList.add("listItem");
        cantorEl.appendChild(item);
    }
    let itemToInfinity = document.createElement("p");
    itemToInfinity.innerHTML = ". <br> . <br> .";
    itemToInfinity.classList.add("listItem");
    cantorEl.appendChild(itemToInfinity);

    let answer = document.getElementById("answerId");
    answer.innerHTML = "";
    answer.classList.add("answer");
    let ans = document.createElement("p");
    ans.innerHTML =
        "<span class='sKey'>s</span>" +
        "<span class='equalSign'>=</span>" +
        sValueGenerator(-1, s) +
        "<span>. . .</span>";
    ans.classList.add("listItem");
    answer.appendChild(ans);
}
else{
    document.getElementById('errorId').innerHTML = "n should be an integer between 0 and 10";
}}

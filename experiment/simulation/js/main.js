document.body.setAttribute("class","gridBody");
let controlsDiv = document.getElementsByClassName('column is-2-desktop is-12-tablet is-12-mobile')[0];
controlsDiv.style.width = 'auto';
let x;
let y=[];
let s = [];
let miss=[];
let correctness=1;
let correction="With indexes starting from 0. The bits at positions "
document.getElementById("check").disabled=true;
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
    document.getElementById("check").disabled=false;
    s.length=0;
    document.getElementById("answerId").value="";
let j = document.getElementsByClassName("input")[0].value;
    let copyj = j;
    j = Number(j);
    const isInteger = Number.isInteger(j);
if(copyj && isInteger && j>=4 && j<11){
    
    let list = [];
    let list3 = [];
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

    /*let answer = document.getElementById("answerId");
    answer.innerHTML = "";
    answer.classList.add("answer");
    let ans = document.createElement("p");
    ans.innerHTML =
        "<span class='sKey'>s</span>" +
        "<span class='equalSign'>=</span>" +
        sValueGenerator(-1, s) +
        "<span>. . .</span>";
    ans.classList.add("listItem");
    answer.appendChild(ans);*/
    console.log(s)


}
else{
    document.getElementById('errorId').innerHTML = "n should be an integer between 4 and 10";
}}

document.getElementById("check").addEventListener("click", check);

    function check(){
        document.getElementById("check").disabled=true;
        correctness=1;
        j=0;
        if(s==""){
            console.log("generate");
        }
        else{
            x=document.getElementById("answerId").value;
            console.log(x);
            console.log(x[0])
           for(i=0;i<x.length;){
                y[i]=x[i];
                i=i+1;
            } 
            if(s.length!==y.length){
                correctness=0;
                document.getElementById("observations1").innerHTML="Length of the input does not match with the correct answer.";
                console.log("nope")}
                else{
                    for(i=0;i<y.length;){
                        if(s[i]==y[i]){
                            if(i==s.length-1){
                                console.log("yup")
                            }
                            console.log("a")
                            i=i+1
                        }
                        else{
                            correctness=0;
                            miss[j]=i;
                            j=j+1;
                            i=i+1
                            console.log("nope2")
                        }
                    }
                    if(correctness==0){
                        for(i=0;i<miss.length-1;){
                            correction=correction+miss[i]+",";
                            i=i+1;
                        }
                        correction=correction.slice(0,correction.length-1)+" "+"and "+miss[miss.length-1]+" "+"are incorrect.";
                        document.getElementById("observations1").innerHTML=correction;
                    }
                }
                if(correctness==1){
                   document.getElementById("correctness").style.color="#29FF46";
                   document.getElementById("observations1").innerHTML="";
            document.getElementById("correctness").innerHTML="Correct";}
            else{
                document.getElementById("correctness").style.color="#FF5151";
                document.getElementById("correctness").innerHTML="Incorrect";
            }
        }
            
        
    }

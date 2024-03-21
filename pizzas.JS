let input1 = document.querySelector(".q1")
let input2 = document.querySelector(".q2")
let button = document.querySelector("button")
let results = document.querySelector(".results")

button.onclick = function(){
    let answer1 = input1.value
    let answer2 = input2.value

if(answer1 === "Y"&&  answer2 === "Y"){
    console.log("color blue")
}else if (answer1==="Y"&& answer2 ==="N"){
    console.log("color pink")
}


}
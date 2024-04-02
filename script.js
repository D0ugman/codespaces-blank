let input1 = document.querySelector(".q1")
let input2 = document.querySelector(".q2")
let button = document.querySelector("button")
let results = document.querySelector(".results")
let A = document.querySelector(".A")
let  img= document.querySelector("img")
button.onclick = function(){
    let answer1 = input1.value
    let answer2 = input2.value

if(answer1 === "Y"  &&  answer2 === "Y"){
    console.log("color blue")
   A.innerHTML = '<img src="gummy2.jpg">  <p>OmG ITS YOu A bag of gummYS</p>'

}else if (answer1==="Y"&& answer2 ==="N"){
    console.log("color pink")
    A.innerHTML = '<img src="Screenshot 2024-02-29 082919.png">  <p>OmG ITS YOu A bag of gummYS</p>'
}else if (answer1 ==="N"&& answer2 === "Y"){
    console.log("cpasdad")
    A.innerHTML = '<img src="Gummy-Bear-PNG-HD-Image.png">  <p>worng your weird </p>'
}else if (answer1 ==="N"&& answer2 === "N")
A.innerHTML = '<img src="mom.jpg">  <p>worng your weird </p>'
console.log("adwada")
}



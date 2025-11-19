let s1=document.getElementById("s1")
let s2=document.getElementById("s2")
let s3=document.getElementById("s3")
let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let n3=document.getElementById("n3")
let nx1=document.getElementById("nx1")
let nx2=document.getElementById("nx2")
let nx3=document.getElementById("nx3")
let bk2=document.getElementById("bk2")
let bk3=document.getElementById("bk3")
let sm=document.getElementById("sum")

nx1.onclick=function(){
if(n1.value.trim()!==""){
s1.style.display="none";s2.style.display="block"
}
}

nx2.onclick=function(){
if(n2.value.includes("@")){
s2.style.display="none";s3.style.display="block"
}
}

nx3.onclick=function(){
if(n3.value.length>3){
s3.style.display="none"
sm.style.display="block"
sm.textContent=n1.value+" "+n2.value+" "+n3.value
}
}

bk2.onclick=function(){s2.style.display="none";s1.style.display="block"}
bk3.onclick=function(){s3.style.display="none";s2.style.display="block"}

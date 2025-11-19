let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let m=100

b1.addEventListener("keydown",function(e){
if(b1.value.length>=m && e.key.length===1){
e.preventDefault()
}
})

b1.addEventListener("input",function(){
let l=m-b1.value.length
b2.textContent=l
if(l<=0) b2.style.color="red"
else if(l<=20) b2.style.color="yellow"
else b2.style.color="black"
})

b3.onclick=function(){
b1.value=""
b2.textContent="100"
b2.style.color="black"
}

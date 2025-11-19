let g1=document.getElementById("g1")
let m1=document.getElementById("m1")
let m2=document.getElementById("m2")
let m3=document.getElementById("m3")

g1.addEventListener("click",function(e){
if(e.target.classList.contains("z")){
m3.src=e.target.src
m1.style.display="flex"
}
})

m1.addEventListener("click",function(){
m1.style.display="none"
})

m2.addEventListener("click",function(e){
e.stopPropagation()
})

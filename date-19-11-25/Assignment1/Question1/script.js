let a1=document.getElementById("a1")
let a2=document.getElementById("a2")
let a3=document.getElementById("a3")
let p=null

a2.onclick=function(){
if(a1.value.trim()!==""){
let t=document.createElement("li")
t.innerHTML=a1.value+" <button class='e1'>e</button> <button class='d1'>x</button>"
a3.appendChild(t)
a1.value=""
}
}

document.addEventListener("click",function(e){
if(p && !p.contains(e.target)){
p.querySelector("input").blur()
}
})

a3.addEventListener("click",function(e){
let x=e.target
let y=x.parentElement
if(x.classList.contains("e1")){
let q=y.firstChild.textContent
y.innerHTML="<input value='"+q+"'> <button class='e1'>e</button> <button class='d1'>x</button>"
let z=y.querySelector("input")
p=y
z.focus()
z.onblur=function(){
let v=z.value
y.innerHTML=v+" <button class='e1'>e</button> <button class='d1'>x</button>"
p=null
}
}
if(x.classList.contains("d1")){
y.remove()
}
})

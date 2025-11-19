let t1=document.getElementById("t1")
let t2=document.getElementById("t2")
let t3=document.getElementById("t3")
let bd=document.body

t1.onclick=function(){bd.setAttribute("class","light");bd.setAttribute("data-theme","light")}
t2.onclick=function(){bd.setAttribute("class","dark");bd.setAttribute("data-theme","dark")}
t3.onclick=function(){bd.setAttribute("class","blue");bd.setAttribute("data-theme","blue")}

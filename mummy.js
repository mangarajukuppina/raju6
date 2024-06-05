let setting=document.getElementById("settings")
console.log(setting);
setting.addEventListener("click", (e)=>{
    console.log("Hii");
    let s1=document.getElementById("s1")
    s1.style.display="block";


})
let close1=document.getElementById("close");
close1.addEventListener("click", (e)=>{
    let s1=document.getElementById("s1");
    s1.style.display="none";
})




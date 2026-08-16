const checks=document.querySelectorAll("input[type=checkbox]");

function updateProgress(){

let done=0;

checks.forEach(c=>{
if(c.checked) done++;
});

document.getElementById("status").innerText=`Done: ${done}/4`;

document.getElementById("bar").style.width=(done*25)+"%";

}

checks.forEach(c=>{

c.addEventListener("change",updateProgress);

});

function finishDay(){

let done=[...checks].filter(c=>c.checked).length;

if(done===4){

alert("🔥 দারুণ! আজকের Mission Complete!");

}else{

alert(`আর ${4-done}টা টাস্ক বাকি।`);

}

}

updateProgress();


let btn=document.querySelector("#btn");
let score=0;
let msg=document.querySelector("#msg");
let check=0;
let checkmsg=document.createElement("div");
let del=document.querySelector("#delete");




btn.addEventListener("click", ()=>{
    let input=document.querySelector("#form input");
  
    
    let lis=document.createElement("li");
    
    let checkbox=document.createElement("input")
    checkbox.type="checkbox";
    lis.innerText=input.value;
    let icon=document.createElement("i");
    // icon.innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-trash"></i>`;
    icon.innerHTML=`&nbsp;&nbsp;<i class="fa-solid fa-trash"></i>`;
    // lis.innerHTML='<i class="fa-solid fa-trash"></i>';
icon.style.position="absolute";
icon.style.left="250px";
    let ulist=document.querySelector("#ulist");
    ulist.style.display="block";
ulist.appendChild(lis);
ulist.appendChild(checkbox);
ulist.appendChild(icon);

score++;
input.value="";
msg2=`${score} task added \n`;
msg.innerHTML=msg2;
checkbox.addEventListener("change", ()=>{
    if(checkbox.checked){
        lis.style.textDecoration="line-through";
        lis.style.opacity="50%";
        check++;
        // let str=`${check} items checked <i class="fa-solid fa-trash"></i>`
        let str=`${check} task completed <i class="fa-regular fa-circle-check"></i>`
        checkmsg.innerHTML=str;
        msg.appendChild(checkmsg);
        

    } 
    else {
        lis.style.textDecoration="none";
        lis.style.opacity="100%";
        check--;
        checkmsg.innerText=`${check} task completed`;
        msg.appendChild(checkmsg);
    }
});




del.addEventListener("click", ()=>{
    ulist.style.display="none";
    score=0;
    msg.innerText=`${score} item added`;
    check=0;
    checkmsg.innerText=`${check} item checked`;
   lis.remove();
   checkbox.remove();
   icon.remove();
})

icon.addEventListener("click", ()=>{
    lis.remove();
    checkbox.remove();
    icon.remove();
    score--;
    msg.innerText=`${score} task(s) added`;   
    if(checkbox.checked){
        check--;
        checkmsg.innerText=`${check} task(s) completed`;
    msg.appendChild(checkmsg);
    }
    
})


});

const message= document.getElementById('message');
const text= document.getElementById('text');
const send= document.getElementById('send');
const clear= document.getElementById('clear');


//send button
send.addEventListener('click',function(){
    let textValue= text.value ;
    message.innerHTML=textValue;
})


//clear button
clear.addEventListener('click',function(){
    message.innerHTML='';
    textValue='';
})
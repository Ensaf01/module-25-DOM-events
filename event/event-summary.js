
// 1st task

// option -1

function statusChange(){
    const statusChangeButton=document.getElementById('status-change');
    statusChangeButton.innerText='updated the staus';
}

// option 2

document.getElementById('statusChange_2ND').addEventListener('click', function(){
    const statusChange_2nd=document.getElementById('status-change');
    statusChange_2nd.innerText='this is changing by 2nd option ';
})


// 2nd task


document.getElementById('btn-updated').addEventListener('click',function(){
    const inputFiled=document.getElementById('input-filed');
    const inputValue=inputFiled.value; // id diye oi vlaue take store korlam

    const message=document.getElementById('ensaf');
    message.innerText=inputValue;
    inputFiled.value='';// auto refresh by empty 
    //inputFiled.value='change by button';
})
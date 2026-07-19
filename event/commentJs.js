document.getElementById('btn-post').addEventListener('click',function(){
    const comment=document.getElementById('texyArea');
    const newComment=comment.value;

    const commentContainer=document.getElementById('new-comment-area');

    //create p tag for comment
    const pTag=document.createElement('p');
    pTag.innerText=newComment;

    //add in comment area use append
    commentContainer.appendChild(pTag);
    
    //clear the text box
    comment.value='';
})
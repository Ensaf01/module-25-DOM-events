// option 1 direct change

// option 2 add onclick function

function makeRed(){
    document.body.style.backgroundColor='red';
}

// option 3

const makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

// another of 3 

const makePurpleButton=document.getElementById('make-purple');
makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}

// option 4

const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}

//option 4 another
const greenButton=document.getElementById('make-green');
greenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
});


// 4 final option

document.getElementById('make-orange').addEventListener('click',function(){ //no need to write function name
    document.body.style.backgroundColor='orange';
})




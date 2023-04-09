let avatar= document.querySelector('.avatar');

let radio = document.getElementById('checkNo');
let text = document.getElementById('comment').value;
let date = new Date().toLocaleString()


let ava = document.getElementById('avatar').value;
function changeImg() {
if (ava === "")
    {let randomAva = Math.round(Math.random()*4);
    console.log(randomAva);
if (randomAva = 0){
    avatar.src = "img/1.webp"
}
if(randomAva = 1){
    avatar.src = "img/2.webp"
}
if(randomAva = 2){
    avatar.src = "img/3.webp"
}if(randomAva = 3){
    avatar.src = "img/4.webp"
}if(randomAva = 4){
    avatar.src = "img/5.jpg"
}}
else {
    avatar.src= ava;
}
}


function nameMy() {
    let MyName = document.getElementById('name').value;
    let small = MyName.toLowerCase();
    document.querySelector('#result').value = small;

    if (radio.checked){
        MyName = "Gest";
    }
    
}

function Com(){
    
    const textResult= text.replace(/XXX/gi, "***");
    document.querySelector('#result').value = textResult;
}



button.addEventListener('click', changeImg)
button.addEventListener('click', nameMy)
button.addEventListener('click', Com)
document.getElementById('ResultComm').innerHTML += `<div><img id ="avatarNew" src=${avatar} width="100px" height="100px"><p class="result">${MyName}</p><p class="date">${date}</p></div>`

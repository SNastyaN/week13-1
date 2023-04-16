let radio = document.getElementById('checkNo');
let avatar = document.querySelector('.avatar');
let date = new Date().toLocaleString()
console.log(date);




function changeImg() {
    let ava = document.getElementById('avatar').value;
if (ava === "")
    {let randomAva = Math.round(Math.random()*5);
    console.log(randomAva);
    if (randomAva === 0){
        avatar.src = "img/1.webp"
    }
    else if(randomAva === 1){
        avatar.src = "img/2.webp"
    }
    else if(randomAva === 2){
        avatar.src = "img/3.webp"
    }
    else if(randomAva == 3){
        avatar.src = "img/4.webp"
    }
    else if(randomAva === 4){
    avatar.src = "img/5.jpg"
    }
} else {
    avatar.src= ava;
}
}


function nameMy() {
    
    let MyName = document.getElementById('name').value;
    let small = MyName.toLowerCase();
    
    let radio = document.getElementById('checkNo');
    if (radio.checked){
        small = "Gest";
    }
    document.querySelector('#result').innerHTML = small;
}



function Com(){
    let text = document.getElementById('comment').value;
    text = text.replace(/XXX/gi, "***");
    document.querySelector('#chat').innerHTML = text;
    console.log(text)}
const block = document.querySelector(".block");
const button = document.getElementById("button");
let total = "";
button.addEventListener('click', changeImg);
button.addEventListener('click', nameMy);
button.addEventListener('click', () => {
    total = total + `<img src="${ava}" class="avatar" width="100px" alt="avatar"><p id="date">${date}</p><p id="result">${small}</p>
    <p id="chat">${text}</p> `;
});




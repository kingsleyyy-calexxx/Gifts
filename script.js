const btn = document.getElementById("generateButton");
const area = document.getElementById("giftarea");

btn.onclick = () =>{
    let nogfs = document.getElementById("textBox").value;
    console.log(nogfs);
    let i;
    for(i=1;i<=nogfs;i++){
        let box=document.createElement("div");
        area.append(box);
        box.innerHTML=i;
        box.style.textAlign="center";
        box.style.width="5vw";
        box.style.height="5vh";
        box.style.border="2px solid white";
        box.style.margin="1vh 1vh";
        box.style.backgroundImage="url(./assets/bg.jpg)"
    }
    btn.hidden=true;
}
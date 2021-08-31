const player1 = Math.floor(Math.random() * 6) + 1;
const player2 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+player1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+player2+".png");

{
    if(player1>player2){
        document.querySelector("h1").textContent = "Player 1 Won";
    }
    else if (player1<player2) {
        document.querySelector("h1").textContent = "Player 2 Won";
    }
    else{
        document.querySelector("h1").textContent = "Draw";
    }
}

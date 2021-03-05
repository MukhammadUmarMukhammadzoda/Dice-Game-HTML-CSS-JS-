document.querySelector('button').addEventListener('click',function(){
   var randomNum = Math.floor(Math.random()*6)+1;
   var dise = "dies"+randomNum+ ".png";
   var surce = "img/"+dise;
   var player1 =   document.querySelectorAll("img")[0];
   var h1 = 0;
   var h2 = 0;
   player1.setAttribute("src", surce);



   var randomNum2 = Math.floor(Math.random()*6)+1;
   var dise2 = "dies"+randomNum2+ ".png";
   var surce = "img/"+dise2;

   var player2 =   document.querySelectorAll("img")[1];
   player2.setAttribute("src", surce);


  if(randomNum >randomNum2){
    document.querySelector("h2").innerHTML = "Player 1 Wins";

}else if(randomNum <randomNum2){
    document.querySelector("h2").innerHTML="Player 2 Wins";

}else{
    document.querySelector("h2").innerHTML="Draw";
}});
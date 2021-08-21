function addUser(){
    var player1_name = document.getElementById("player1").value;
    var player2_name = document.getElementById("player2").value;
    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
    window.location = "game.html";
}
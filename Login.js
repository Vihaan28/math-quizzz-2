function adduser(){

    var player_1 = document.getElementById("playerinput1").value;
    var player_2 = document.getElementById("playerinput2").value;
    if( player_1 != "" && player_2 != "" ){

        localStorage.setItem("Player_1_name-" , player_1);
        localStorage.setItem("Player_2_name-" , player_2);
        window.location="game_page.html";
    }
        document.getElementById("warning").innerHTML=" * Please Log-in First to play the game *";

}

let player_options = document.querySelectorAll('.player-options .img');

let computer_options = document.querySelectorAll('.computer-options .img');
let index_player_option;
let index_computer_option;
let single_game_winner;
let player_score = 0, computer_score = 0;

let score = document.querySelector(".score");
let reset = document.querySelector("button");


/* Check for user input */
player_options.forEach(element => {
    element.addEventListener('click',() =>{
        
        color_chosen_img(element); /* Funkcija boja sliku koja je kliknuta i sve ostale boja u transparentno */
        score.style.backgroundColor = "CornflowerBlue";
        index_player_option = Array.from(player_options).indexOf(element);
        index_computer_option = Math.floor(Math.random() *3);
        color_computer_option(index_computer_option);

        single_game_winner = decide_winner(index_player_option, index_computer_option);

        update_score(single_game_winner);
        
        if(player_score === 5)
        {
            score.style.backgroundColor = "green";
            score.textContent = "You won against computer!";
            player_score = 0;
            computer_score = 0;
            
            make_it_transparent();

        }
        if(computer_score === 5)
        {
            score.style.backgroundColor = "FireBrick";
            score.textContent = "You lost against computer!";
            player_score = 0;
            computer_score = 0;
            make_it_transparent();
        }
    });

  

});

reset.addEventListener('click', ()  => {
    player_score = 0;
    computer_score = 0;
    score.textContent = ("Score: You: 0 : Computer: 0");
    

    /* And color everything transparent */
    make_it_transparent();

    return;
})




/* Funkcija služi za bojanje slike koja je zadnja kliknuta */
function color_chosen_img(element)
{
    player_options.forEach(el=>{
        el.style.backgroundColor = "transparent"
    })

    element.style.backgroundColor = "#FFB6C1";

}

/* Funkcija služi za odlučivanje pobjednika u jednoj igri */
function decide_winner(player,computer)
{
    if(player === computer)
    {
        return "draw";
    }
    else if(player === 0 && computer === 1)
    {
        return "computer";
    }
    else if(player === 1 && computer === 2)
    {
        return "computer";
    }
    else if(player === 2 && computer === 0)
    {
        return "computer";
    }
    else if(player === 0 && computer === 2)
    {
        return "player";
    }
    else if(player === 1 && computer === 0)
    {
        return "player";
    }
    else if(player === 2 && computer === 1)
    {
        return "player";
    }
}

/* Funkcija sluzi za bojanje odabira računala */
function color_computer_option(index){

    computer_options.forEach(el=>{
        el.style.backgroundColor = "transparent";
    })

    computer_options[index].style.backgroundColor = "#FFB6C1";
    return;
}

/*update score*/
function update_score(winner)
{
    if(winner === "player")
    {
        player_score++;
    }
    else if(winner === "computer")
    {
        computer_score++;
    }
    

    score.textContent = "Score: You: " + player_score + " : Computer: " + computer_score;
}



function make_it_transparent(){
    player_options.forEach(el=>{
        el.style.backgroundColor = "transparent";
        
    });
    computer_options.forEach(el=>{
        el.style.backgroundColor = "transparent";
    });
    
}




let player_options = document.querySelectorAll('.player-options .img');

player_options.forEach(element => {
    element.addEventListener('click',() =>{
        
        player_options.forEach(el =>{
            el.style.backgroundColor = "transparent"
        })

        element.style.backgroundColor = "red";
        
    })



});
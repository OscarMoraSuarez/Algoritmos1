console.clear();// entre ejecucion y ejecucion lim pia la consola

const  GAME_OPTIONS_=['PIEDRA','PAPEL','TIJERA'];
const GAME_RULES={
    PIEDRA:{
        TIJERA :true,
        PAPEL: false
    },
    PAPEL:{
        PIEDRA: true,
        TIJERA: false
    },
    TIJERA:{
        PAPEL: true,
        PIEDRA: false
    }
}



/* 
    funcion ejecuta el juego de piedra, papel,tijera
    @param() player opcion del jugador 1
    param() player opcion del jugador 2
    
 */
/* 
}switch (player1) {
        case 'PIEDRA' :
            switch(player2){
                case 'PAPEL':
                    return 'player 2 gana';
                default:
                    return 'Player 1 gana';    
            }
        case 'PAPEL' :
            switch(player2){
                case 'TIJERA':
                    return 'player 2 gana';
                default:
                    return 'Player 1 gana';    
            }
        case 'TIJERA' :
            switch(player2){
                case 'PIEDRA':
                    return 'player 2 gana';
                default:
                    return 'Player 1 gana';    
            }        
               
            break;
    
        default:
            break; */
function game(player1,player2){
    if(!GAME_OPTIONS_.includes(player1)||!GAME_OPTIONS_.includes(player2))throw new Error('opcion de juego no valida');
    if (player1===player2) return 'Empate';
    if(GAME_RULES[player1][player2])return 'player1 gana';
    else return 'Player2 gana';
}


console.log(game('PAPEL','PIEDRA'))

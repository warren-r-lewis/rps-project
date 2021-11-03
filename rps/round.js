// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        var handCode = Math.floor(Math.random(3))
        switch(handCode)
        {
            case 0:
                var hand = Selections.ROCK;
            break;
            case 1:
                var hand = Selections.PAPER;
            break;
            case 2:
                var hand = Selections.SCISSORS;
            break;
        }
        return hand;
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        console.log("Player: " + this.playerSelection);
        console.log("Computer: " +this.computerSelection);
        if(this.computerSelection == this.playerSelection){
            var outcome = Outcomes.TIE;
        }
        else if((this.playerSelection == Selections.ROCK) && (this.computerSelection == Selections.SCISSORS)){
            var outcome = Outcomes.PLAYER_WINS;
        }
        else if((this.playerSelection == Selections.PAPER) && (this.computerSelection == Selections.PAPER)){
            var outcome = Outcomes.PLAYER_WINS;
        }
        else if((this.playerSelection == Selections.ROCK) && (this.computerSelection == Selections.SCISSORS)){
            var outcome = Outcomes.PLAYER_WINS;
        }
        else {
            var outcome = Outcomes.COMPUTER_WINS;
        }

        return outcome;
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;

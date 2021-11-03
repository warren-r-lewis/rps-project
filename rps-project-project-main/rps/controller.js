var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame()
    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again

    do{
        var numberOfRounds = window.prompt("How many rounds do you wish to play? Please enter a number between 1 and 5: ");
        var validRounds = game.isNumberOfRoundsValid(numberOfRounds);
        
    }while(validRounds == false);

    game.setNumberOfRounds(numberOfRounds);
    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    var roundNumber = 0;
    for(let i = numberOfRounds; i>0; i--){
    roundNumber++;
    playRound(roundNumber);
    }
    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log("Computer wins: " + game.countOfComputerWins + ", Player wins: " + game.countOfPlayerWins + ", Ties: " + game.countOfTies);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    //Prompt for Player Selection
    console.log("Computer wins: " + game.countOfComputerWins + ", Player wins: " + game.countOfPlayerWins + ", Ties: " + game.countOfTies);
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();
    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log("round: " + roundNumber + " Winner: " + outcome);  
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
     //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    do{
    var playerHand = window.prompt("Enter 'Rock', 'Paper', or 'Scissors': ");
    }
    while(playerHand != "Rock" && playerHand != "Paper" && playerHand != "Scissors" && playerHand != "rock" && playerHand != "paper" && playerHand != "scissors");
    

    switch(playerHand){
        case "Rock":
        var selectionReturn = Selections.ROCK;
        break;
        case "Paper":
        var selectionReturn = Selections.PAPER;
        break;
        case "Scissor":
        var selectionReturn = Selections.SCISSORS;
        break;
        case "rock":
        var selectionReturn = Selections.ROCK;
        break;
        case "paper":
        var selectionReturn = Selections.PAPER;
        break;
        case "scissor":
        var selectionReturn = Selections.SCISSORS;
        break;
        }
        return selectionReturn;
            
    }
   



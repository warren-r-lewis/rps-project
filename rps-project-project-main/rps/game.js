class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfPlayerWins property
        this.countOfPlayerWins++;
    }

    incrementComputerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfComputerWins property
        this.countOfComputerWins++;
    }

    incrementCountOfTies(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfTies property
        this.countOfTies++;
    }


    setNumberOfRounds(numberOfRounds){
        //*********************************ADD CODE HERE *************************************/
        // Set the numberOfRounds property to the parameter
        this.numberOfRounds = numberOfRounds;
    }

    newGame(){
        //*********************************ADD CODE HERE *************************************/
        // Clear all properties to their default values
        this.countOfPlayerWins = 0;
        this.countOfTies = 0;
        this.countOfComputerWins= 0;
        this.numberOfRounds = null;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
        //*********************************ADD CODE HERE *************************************/
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
        var numParse = parseInt(num, 10);
        switch(numParse){
            case 1: 
            var validSelection =true;
            break;
            case 2:
            var validSelection =true;
            break;
            case 3:
            var validSelection =true;
            break;
            case 4: 
            var validSelection =true;
            break;
            case 5:
            var validSelection =true;
            break;
            default:
            var validSelection =false;
            break;
            
        }
        return validSelection;
    }
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;
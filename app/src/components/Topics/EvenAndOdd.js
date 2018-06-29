import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ""
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        });
    }

    divideArray() {
        let evensArr = this.state.userInput.split(",").map((num) => Math.trunc(num)).filter((num) => num % 2 === 0);
        let oddsArr = this.state.userInput.split(",").map((num) => Math.trunc(num)).filter((num) => num % 2 !== 0);
        this.setState({
            evenArray : evensArr,
            oddArray : oddsArr
        });
        
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine"
                onChange={(e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.divideArray()}>Split</button>
                <span className="resultsBox"> Evens: [{this.state.evenArray.join(",")}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray.join(",")}]</span>
            </div>
        );
    }
}

export default EvenAndOdd;
import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput : "",
            palindrome : ""
        };
    }

    updateUserInput(val) {
        this.setState({
            userInput : val
        });
    }

    isPalindrome() {
        let ispalindrome = this.state.userInput === this.state.userInput.split("").reverse().join("") ? "true" : "false"
        this.setState({
            palindrome : ispalindrome
        });
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input type="text" className="inputLine"
                onChange={(e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.isPalindrome()}> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        );        
    }
}

export default Palindrome;
import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray : [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput : "",
            filteredArray : []
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        });
    }

    filterArray() {
        let filterArray = this.state.unFilteredArray
                            .filter(name => name.toLowerCase().includes(this.state.userInput.toLowerCase()));
        this.setState({
            filteredArray : filterArray
        });
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB"> 
                <h4> Filter String </h4>
                <span className="puzzleText"> Names:{JSON.stringify(this.state.unFilteredArray)} </span>
                <input type="text" className="inputLine"
                onChange={(e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.filterArray()}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;
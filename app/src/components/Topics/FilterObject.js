import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray : [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput : "",
            filteredArray : []
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput : val
        });
    }

    filterArray() {
        let filterArray = this.state.unFilteredArray.filter(obj => obj.hasOwnProperty(this.state.userInput));
        this.setState({
            filteredArray : filterArray
        });
        
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: [ {/*{this.state.unFilteredArray.join(",")}*/} { JSON.stringify(this.state.unFilteredArray, null, 10) } ]</span>
                <input type="text" className="inputLine"
                onChange={(e) => this.updateUserInput(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.filterArray()}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        );
    }
}

export default FilterObject;
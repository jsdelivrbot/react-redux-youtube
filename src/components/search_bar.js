import React, { Component } from 'react';

class SearchBar extends Component {

    //class based components need a constructor to instantiate their initial state
    constructor(props) {
        //always needed and called - grabbed from the abstract component react class
        super(props);

        //creating the state - only in the constructor is the state used this way
        this.state = { searchTerm: '' };
    }

    render() {
        //always manipulate state with this.setState, and not the way it's done in the constructor
        return (
            <div>
                {/*A controlled component because its value is set by the state
                - this is due to the value property - grabs its value from the state*/}
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.setState({ searchTerm: event.target.value })} />
            </div>
        );
    }

}

export default SearchBar;
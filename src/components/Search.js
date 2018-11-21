import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchStr: ''
        };

        this.onSearchStrChange = this.onSearchStrChange.bind(this);

        this.search = this.search.bind(this);
    }

    onSearchStrChange(event) {
        this.setState({searchStr: event.target.value});
    }

    search() {
        this.props.search( this.state.searchStr );
    }

    render() {
        return (
            <div>
                <h3>Поиск</h3>
                <input type={"search"} onChange={this.onSearchStrChange} value={this.state.searchStr} />
                <button onClick={this.search}>🔍</button>
            </div>
        );
    }
}

export default Search;
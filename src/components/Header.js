import React, { Component } from 'react';

import NewElement from './NewElement';
import Filtrate from './Filtrate';
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <header>
                <NewElement addElement={this.props.addElement} />
                <Filtrate filtrate={this.props.filtrate} />
                <Search search={this.props.search} />
            </header>
        );
    }
}

export default Header;

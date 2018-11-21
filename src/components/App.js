import React, { Component } from 'react';

import Header from './Header';
import List from './List';

import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            visibleElements: []
        };

        this.id = 0;

        this.filtrate = this.filtrate.bind(this);
        this.search = this.search.bind(this);
        this.addElement = this.addElement.bind(this);

        this.elementComplete = this.elementComplete.bind(this);
        this.elementDelete = this.elementDelete.bind(this);
    }

    filtrate( dateStart, dateEnd, status ) {
        this.setState({
            visibleElements: this.state.elements.filter(
                (val) => val.date>=dateStart && val.date<=dateEnd && val.isComplete===status
            )
        });
    }

    search( str ) {
        this.setState({
            visibleElements: this.state.elements.filter(
                (val) => val.title.match(new RegExp( str )) != null
            )
        });
    }

    addElement(title, text ) {
        let newObj = {
            id: this.id,
            date: Date.now(),
            title: title,
            text: text,
            isComplete: false
        };

        this.updateElements([ ...this.state.elements, newObj ]);

        this.id++;
    }

    elementComplete( id ) {
        let elemPos = this.state.elements.findIndex( el => el.id === id );
        let elem = this.state.elements[elemPos];
        elem.isComplete = true;

        this.updateElements([ ...this.state.elements.slice(0, elemPos), elem, ...this.state.elements.slice(elemPos+1) ]);
    }

    elementDelete( id ) {
        let elemPos = this.state.elements.findIndex( el => el.id === id );
        
        this.updateElements([ ...this.state.elements.slice(0, elemPos), ...this.state.elements.slice(elemPos+1) ]);
    }

    updateElements( elements ){
        this.setState({
            elements: elements,
            visibleElements:elements
        });
    }

    render() {
        return (
            <div className="App">
                <Header addElement={this.addElement} search={this.search} filtrate={this.filtrate} />
                <List
                    elements={this.state.visibleElements}
                    elementComplete={this.elementComplete}
                    elementDelete={this.elementDelete}
                />
            </div>
        );
    }
}

export default App;

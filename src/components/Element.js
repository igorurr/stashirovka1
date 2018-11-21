import React, { Component } from 'react';

class Element extends Component {
    constructor(props) {
        super(props);

        this.doComplete = this.props.doComplete.bind(this);
    }

    render() {
        return (
            <article>
                <header>
                    <p>{new Date(this.props.date).toString()}</p>
                    <h3>{this.props.title}</h3>
                </header>
                <p>{this.props.text}</p>
                <footer>
                    {this.props.isComplete ? <p>Выполнено</p> : <p>Не выполнено</p>}
                    {!this.props.isComplete ? <button onClick={this.doComplete}>Выполнить</button> : <p></p>}
                </footer>
            </article>
        );
    }
}

export default Element;
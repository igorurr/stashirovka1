import React, { Component } from 'react';

class NewElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: ''
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        this.add = this.add.bind(this);
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onTextChange(event) {
        this.setState({text: event.target.value});
    }

    add() {
        this.props.addElement( this.state.title, this.state.text );
    }

    render() {
        return (
            <div>
                <h3>Добавить</h3>
                <p>Заголовок:</p>
                <input type={"text"} onChange={this.onTitleChange} value={this.state.title} />
                <p>Текст:</p>
                <textarea onChange={this.onTextChange} value={this.state.text} ></textarea>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default NewElement;
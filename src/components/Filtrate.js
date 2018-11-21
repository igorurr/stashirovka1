import React, { Component } from 'react';

class Filtrate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateFrom: '',
            dateTo: '',
            isComplete: false
        };

        this.onDateFromChange = this.onDateFromChange.bind(this);
        this.onDateToChange = this.onDateToChange.bind(this);
        this.onIsCompleteChange = this.onIsCompleteChange.bind(this);

        this.filtrate = this.filtrate.bind(this);
    }

    onDateFromChange(event) {
        this.setState({dateFrom: event.target.value});
    }

    onDateToChange(event) {
        this.setState({dateTo: event.target.value});
    }

    onIsCompleteChange(event) {
        this.setState({isComplete: event.target.checked});
    }

    filtrate() {
        this.props.filtrate(
            Date.parse(this.state.dateFrom),
            Date.parse(this.state.dateTo),
            this.state.isComplete
        );
    }

    render() {
        return (
            <div>
                <h3>Фильтр</h3>
                <p>От:</p>
                <input type={"datetime-local"} onChange={this.onDateFromChange} value={this.state.dateFrom} />
                <p>До:</p>
                <input type={"datetime-local"} onChange={this.onDateToChange} value={this.state.dateTo} />
                <p>Выполнено?</p>
                <input type={"checkbox"} onChange={this.onIsCompleteChange} value={this.state.isComplete} />
                <button onClick={this.filtrate}>🔍</button>
            </div>
        );
    }
}

export default Filtrate;
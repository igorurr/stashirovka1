import React, { Component } from 'react';

import Element from './Element';

class List extends Component {
    render() {
        return (
            <content>
                {this.props.elements.map(
                    (el,i,arr) => <Element
                                key={el.id}
                                date={el.date}
                                title={el.title}
                                text={el.text}
                                isComplete={el.isComplete}
                                doComplete={()=>this.props.elementComplete(el.id)}
                                delete={()=>this.props.elementDelete(el.id)}
                          />
                )}
                {/*<Element date={"21.07.9486"} title={"dfst45sf"} text={"hui"} doComplete={()=>console.log("3")} />*/}
            </content>
        );
    }
}

export default List;
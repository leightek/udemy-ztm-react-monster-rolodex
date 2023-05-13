import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hello I'm the CardList Component</h1>
                <div>
                    <p>text</p>
                </div>

                <div></div>
            </div>
        )
    }
}

export default CardList;
import { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <input 
                className={this.props.className} 
                type='search' // show X in search box and clear search text when selecting it
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} 
            />
        )
    }
}

export default SearchBox;
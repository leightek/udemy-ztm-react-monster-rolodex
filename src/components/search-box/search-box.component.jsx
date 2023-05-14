import { Component } from 'react';

import './search-box.styles.css'; // styling applied to not only this component, but all components

class SearchBox extends Component {
    render() {
        return (
            <input 
                className={`search-box ${this.props.className}`}
                type='search' // show X in search box and clear search text when selecting it
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} 
            />
        )
    }
}

export default SearchBox;
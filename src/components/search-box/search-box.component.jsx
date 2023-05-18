import './search-box.styles.css'; // styling applied to not only this component, but all components

const SearchBox = ({ className, placeholder,onChangeHandler }) => (
    <input 
        className={`search-box ${className}`}
        type='search' // show X in search box and clear search text when selecting it
        placeholder={placeholder} 
        onChange={onChangeHandler} 
    />
);

export default SearchBox;
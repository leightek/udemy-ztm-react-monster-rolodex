import { Component } from 'react';

class CardList extends Component {

    render() {
        console.log(this.props.monsters);
        console.log("rende from CardList");
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map((monster) => (
                    <div className='card-container' key={monster.div} >
                        <img 
                            alt={`monster ${monster.name}`} 
                            src={`https://robohash.org/${monster.id}3?set=set2&size=180x180`}
                        />
                        <h2>{monster.name}</h2>
                        <p>{monster.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;
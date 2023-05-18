import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => ( // second parametet - forwardRef not used very often
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })}
    </div>
);

export default CardList;
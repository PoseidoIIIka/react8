import { Link } from 'react-router-dom';
import s from './Card.module.css';


export function Card({ id, image, name, price}) {

    return (
        <div className={s.tovar}>
            <img src={image} className={s.image}></img>
            <p className={s.name}>{name}</p>
            <div className={s.block}>
                <h3 className={s.price}>{price} ₽</h3>
                <Link className={s.btn} to={`${id}`}>Подробнее</Link>
            </div>
        </div>
    )
}


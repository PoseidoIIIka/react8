import { products } from '../../data/data';
import s from './ProductPage.module.css'
import { useParams } from 'react-router-dom';

export function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div className="container">
            <section className={s.product}>
                <div className={s.product__im}>
                    <img src={product.image} alt="" className={s.product__img} />
                </div>
                <div className={s.product__abouts}>
                    <div className={s.product__about}>
                        <h1 className={s.product__name}>{product.name}</h1>
                        <p className={s.product__description}>{product.description}</p>
                    </div>
                    <div className={s.product__about2}>
                        <p className={s.product__price}>{product.price} ₽</p>
                        <button className={s.btn}>Добавить в корзину</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
import s from './CatalogPage.module.css';
import { products } from '../../data/data.js';
import { Card } from '../../components/Card/Card.jsx';
import { useState } from 'react';
import { Search } from '../../components/Search/Search.jsx';

export function CatalogPage() {
    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <div className="container">
            <div className={s.catalog}>
                <h1 className={s.hh}>Каталог товаров</h1>
                <Search handleChange={handleChange} />
                <div className={s.catalogs}>
                    {
                        filteredProducts.length ?
                            filteredProducts.map((product) => {
                                return (
                                    <Card {...product} />
                                )
                            })
                            :
                            <p className="error">Ничего не найдено по запросу "{query}"</p>
                    }
                </div>
            </div>
        </div>
    )
}
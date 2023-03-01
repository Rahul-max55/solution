import React from 'react';
import "./Product.css";
import Api from "./api";
import Cards from './Cards';
import { useSelector } from 'react-redux';


const Product = () => {

    const data = useSelector(store => store.filters);

    const { filteredProd } = data;

    return (
        <div className="products_box">
            {filteredProd.map((v , i) => {
                return <Cards key={i} id={v.id} image={v.image} name={v.name} price={v.price} />
            }
            )
            }
        </div>
    )
}

export default Product
import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import {UseStateValue} from "./stateProvider";
import basket from "./reducer";



function product({id, title, image, price, rating}) {
    const [ state, dispatch] = UseStateValue();
    console.log('this is basket page', basket);

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className='product'>
            <div className= 'product__info'>
                <p>{title}</p>
                <p className= 'product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map(_i =>(
                        <p><StarIcon/></p>
                    ))}
                   
                </div>
            </div>
            <img src={image}/> 
           <button onClick = {addToBasket}>Add to Cart</button>
        </div>
    );
};

export default product;

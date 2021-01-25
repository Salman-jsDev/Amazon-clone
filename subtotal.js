import React from 'react';
import './subtotal.css';
import CurrencyFormat from "react-currency-format";
import basket from "./reducer";
import addToBasket from "./product";

function subtotal() {
    return (
        <div className= 'subtotal'>
            <CurrencyFormat
            renderText={(value) =>{
                <>
                <p>
                    Subtotal ({basket.length} items):
                   <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>
            }}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button>Proceed To Checkout</button>
        </div>
    );
};

export default subtotal;

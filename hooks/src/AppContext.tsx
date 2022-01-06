import React, { useContext, useReducer } from "react";
import CartContext from "./CartContext";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Cart {
    products: string[];
    shipping_value?: number;
}

interface Action {
    type: string,
    payload: Cart;
}

const AppContext: React.FC = () => {
    const context = useContext(CartContext);
    
    const cart = useReducer(
        (state: Cart, action: Action) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto novo']
                    }

                default:
                    return state;
            }
        }, {
            products: [],
            shipping_value: 0,
        },
    );

    return(
        <div>
            {context.products}
        </div>
    );
}

export default AppContext;
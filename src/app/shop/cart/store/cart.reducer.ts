import { createReducer, on } from "@ngrx/store";
import { addproduct, checklogin, checkprice, decreaseqty, emptycart, increaseqty, removeproduct } from "./cart.actions";
import { initalstate } from "./cart.state";

const _cartReducer = createReducer(initalstate,
    on(addproduct, (state, action) => {
        return {
            ...state,
            price: state.price + (action.product.deal ? action.product.deal.price : action.product.price),
            products: state.products?[...state.products, action.product]:[action.product]
        }
    }),
    on(removeproduct, (state, action) => {
        return {
            ...state,
            products: state.products?.filter((data) => {
                if (data.productId !== action.productId)
                    return true;
                else
                    return false;
            }),
            price: state.products?.reduce((a, data) => {
                if (data.productId !== action.productId)
                    return a + data.subTotal
                else
                    return a + 0;
            }, 0)
        }
    }),
    on(increaseqty, (state, action) => {
        return {
            ...state,
            products: state.products.map((data) => {
                if (data.productId === action.productId) {
                    return {
                        ...data,
                        qty: data.qty + 1,
                        subTotal: data.subTotal + (data.deal ? data.deal.price : data.price)
                    }
                }
                else
                    return data;
            }),
        }
    }),
    on(decreaseqty, (state, action) => {
        return {
            ...state,
            products: state.products.map((data) => {
                if (data.productId === action.productId) {
                    return {
                        ...data,
                        qty: data.qty - 1,
                        subTotal: data.subTotal - (data.deal ? data.deal?.price : data.price)
                    }
                }
                else
                    return data;
            }),
        }
    }),
    on(checklogin, (state) => {
        return {
            ...state,
            login: localStorage.getItem('loginuser') ? true : false
        }
    }),
    on(emptycart, (state) => {
        return {
            ...state,
            products: [],
            price: 0
        }
    }),
    on(checkprice, (state) => {
        return {
            ...state,
            price: state.products.reduce((a, data) => {
                return a + data.subTotal
            }, 0)
        }
    })
)

export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
}
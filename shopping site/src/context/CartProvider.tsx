import { useMemo, useReducer, createContext, ReactElement } from "react";

// Define the type for each item in the cart
export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

// Define the type for the cart state
type CartStateType = {
    cart: CartItemType[]
}

// Initialize the initial cart state
const initCartState: CartStateType = { cart: [] }


// Define the action types for the reducer
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

// Define the type for each action
export type ReducerAction = {
    type: string, //? REDUCER_ACTION_TYPE, "ADD" | "REMOVE" | "QUANTITY" | "SUBMIT
    payload?: CartItemType, //? { sku: string, name: string, price: number, qty: number } is the payload, 
}

// Define the reducer function to handle state updates
const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) throw new Error("Payload is missing")

            // Get the SKU, name, and price of the new item to add
            const { sku, name, price } = action.payload;

            // Remove any existing item with the same SKU
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            // Check if the item already exists in the cart
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            // Calculate the new quantity for the item
            const qty: number = itemExists ? itemExists.qty + 1 : 1

            // Add the updated item to the cart
            return {
                ...state,
                cart: [...filteredCart, { sku, name, price, qty }]
            }
        }

        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) throw new Error("Payload is missing")

            // Get the SKU of the item to remove
            const { sku } = action.payload;

            // Remove the item with the specified SKU from the cart
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku);

            return { ...state, cart: filteredCart }
        }

        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) throw new Error("Payload is missing")
            const { sku, qty } = action.payload;

            // Find the item with the specified SKU in the cart
            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku);

            if (!itemExists) throw new Error("Item must exist in order to update quantity")

            // Update the quantity of the item
            const updatedItem: CartItemType = { ...itemExists, qty } // update the quantity of the item with the new quantity

            // Remove the previous item from the cart and add the updated item
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku);

            return { ...state, cart: [...filteredCart, updatedItem] } // add the updated item to the cart
        }

        case REDUCER_ACTION_TYPE.SUBMIT:
            return { cart: [] }

        default:
            throw new Error("Unidentified action type")
    }
}

// Custom hook to provide cart context and state management
const useCartContext = () => {
    const [state, dispatch] = useReducer(reducer, initCartState)

    // Memoize the action types to avoid unnecessary re-renders
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    // Calculate the total number of items in the cart
    const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty
    }, 0)

    // Calculate the total price of all items in the cart
    const totalPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(state.cart.reduce((previousValue, cartItem) => {
        return previousValue + (cartItem.price * cartItem.qty)
    }, 0))

    // Sort the cart items based on SKU
    const cart = state.cart.sort((a, b) => {
        const ItemA = Number(a.sku.slice(-4))
        const ItemB = Number(b.sku.slice(-4))
        return ItemA - ItemB
    })

    // Return the dispatch function, action types, cart, total items, and total price
    return { dispatch, REDUCER_ACTIONS, cart, totalItems, totalPrice }
}



// Define the type for the cart context
export type UseCartContextType = ReturnType<typeof useCartContext>

// Initialize the initial cart context state
const initCartContextState: UseCartContextType = {
    dispatch: () => {
        throw new Error("dispatch function must be overridden")
    },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []
}

// Create the cart context using createContext
export const CartContext = createContext<UseCartContextType>(initCartContextState)

// Define the type for the children prop
type ChildrenType = { children?: ReactElement | ReactElement[] }

// CartProvider component to wrap the application with the cart context
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
    // Provide the cart context value using the useCartContext hook
    return (
        // useCartContext returns the dispatch function, action types, cart, total items, and total price
        <CartContext.Provider value={useCartContext()}>
            {children}
        </CartContext.Provider>
    )
}

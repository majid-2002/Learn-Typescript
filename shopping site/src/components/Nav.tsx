import { Dispatch, SetStateAction } from "react"

type NavProps = {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>
}


const Nav = ({ viewCart, setViewCart }: NavProps) => {

    const button = viewCart ?
        <button onClick={() => setViewCart(false)}>
            View Products
        </button> :
        <button onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <nav className="nav">
            {button}
        </nav>
    )

    return content;
}

export default Nav
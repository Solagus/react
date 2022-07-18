import "./Cart.css"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { CartContext } from "../../../context/cartContext";

function Cart() {

    const { cartItem } = useContext(CartContext)

    return (
        <div className="d-flex justify-content-center carrito">
            <div className="DivCarrito">
                <h1>Carrito</h1>
                {cartItem.map((item) => {
                    <div>
                        <p>Articulo: {item.nombre} </p>
                        <p>Cantidad: {item.cantidad} </p>
                        <p>Precio: {item.precio * item.cantidad} </p>
                    </div>
                })}
                <div className="DivFinalizar">
                    <p>Total: </p>
                    <Button variant="danger" className="Button">Terminar compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
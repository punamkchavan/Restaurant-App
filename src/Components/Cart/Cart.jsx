import classes from './Cart.module.css';
import Modal from '../UI/Modal';
export default function Cart(){
    const cartItems=(
    <ul className={classes['cart-items']}>
        {[{id:'c1',name:"sushi",amount:2,price:22,}].map((item)=>(<li>{item.name}</li>))}</ul>);

    return(
        <>
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>22.45</span>
                </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
        </>
    )
}
import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';
export default function MealsItem(props){

    const price=` Rs. ${props.price.toFixed(2)}`;

    return(
        <>
        <li className={classes.meal}>
            <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm />
            </div>
        </li>
        </>
    )
}
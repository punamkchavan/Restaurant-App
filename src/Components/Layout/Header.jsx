import HeaderCartButton from "./HeaderCartButton"
import mealsImage from '../../assets/image24.jpg';
import classes from './Header.module.css';
export default function Header(props){

    return(
        <>
        <header className={classes.header}>
            <h1>Kokani Cuisine</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
        </>
    )

}
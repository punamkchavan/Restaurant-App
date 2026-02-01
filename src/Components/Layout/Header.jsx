import HeaderCartButton from "./HeaderCartButton"
import mealsImage from '../../assets/KonkaniCuisine.png';
import classes from './Header.module.css';
export default function Header(){

    return(
        <>
        <header className={classes.header}>
            <h1>Kokani Cuisine</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
        </>
    )

}
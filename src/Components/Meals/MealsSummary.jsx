import classes from './MealsSummary.module.css'

export default function MealsSummary(){
    return(
        <>
        <section className={classes.summary}>
          <h2>Authentic Kokani Food, Delivered To You</h2>
            <p>
              Discover the true taste of Konkan with our wide range of traditional Kokani
              dishes, made with love and local spices.
            </p>
            <p>
              From fresh seafood to homestyle vegetarian meals, all our food is prepared
              using high-quality ingredients and cooked fresh by experienced Kokani chefs.
            </p>
       </section>
        </>
    )
}
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItems/MealsItem';

const Dummy_Meals=[
    {
    id: 'm1',
    name: 'Paplate Thali',
    description: 'Finest fish and Bhakri with solkadi',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Ukadiche Modak',
    description: 'Kokan Special sweet dumplings',
    price: 50,
  },
  {
    id: 'm3',
    name: 'Kolambi Vade',
    description: 'fluffy rice-lentil bread',
    price: 300,
  },
  {
    id: 'm4',
    name: 'Phansachi Bhaji',
    description: 'A spicy curry made from tender jackfruit',
    price: 80,
  },
]
export default function AvailableMeals(){

    const mealList= Dummy_Meals.map((meal)=>(
    <MealsItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name}
    description={meal.description}
   />
    ));

    return(
        <>
        <section className={classes.meals}>
        <Card>
        <ul>{mealList}</ul>
        </Card>
        </section>
        </>
    )
}
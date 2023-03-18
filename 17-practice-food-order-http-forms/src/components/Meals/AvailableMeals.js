import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import {useEffect, useState} from "react";

// const DUMMY_MEALS = [{
//     id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99,
// }, {
//     id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5,
// }, {
//     id: 'm3', name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99,
// }, {
//     id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99,
// },];
const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchMeals = async () => {

            const response = await fetch('https://react-http-7c896-default-rtdb.firebaseio.com/meals.json')
            const data = await response.json();

            let loadedMeals = []
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedMeals)
            console.log(loadedMeals)
            setIsLoading(false)
        }

        fetchMeals()

    }, []);

    if(isLoading)
    {
        return <section>
            <p className={classes.MealsLoading}>Loading...</p>
        </section>
    }



    const mealsList = meals.map(meal => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}/>)

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>

}

export default AvailableMeals









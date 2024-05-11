import { Meal } from "../../interfaces/Meal";
import './MealTemplate.css'
 


export default function MealTemplate(props: Meal) {


    return (
    <div className={'dietContainer'}>
        <div>
            <p>{'Proteins: '}</p>
            {props.proteins.map((p) => (
                <div>
                    <p> {p.name}</p>
                    <div>{p.grams}</div>
                </div>
            ))}
            <p>{'Carbohydrates: '}</p>
            {props.carbs.map((c) => (
                <div>
                    <p> {c.name}</p>
                    <div>{c.grams}</div>
                </div>
            ))}
            <p>{'Fats: '}</p>
            {props.fats.map((f) => (
                <div>
                    <p>{f.name}</p>
                    <div>{f.grams}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

 
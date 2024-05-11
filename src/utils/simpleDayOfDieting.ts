import { Meal } from "../interfaces/Meal";

export const simpleDayOfDieting = (calories: number) : Meal[] => {
    const result: Meal[] = []
    for(let i=1; i < 4; i++){
        result.push({
            proteins: [{ name: 'Chicken breat - uncooked', grams: 150}],
            fats: [{ name: 'None', grams: 0}],
            carbs: [{ name: 'Rice - boiled', grams: 150}]
        })
    }
    if(calories > 1368){
        result.push({
            proteins: [{ name: ' ', grams: 0}],
            fats: [{ name: 'None', grams: 0}],
            carbs: [{ name: 'Whatever you want but limited to: ', grams: 158}]
        })
    }

    return result

}
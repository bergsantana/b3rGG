import React, { useState } from "react"
import './styles/DietTemplate.css'

export default function DietTemplate(){
    const [ calories, updateCalories ] = useState(0)
    const [ showMaintenceCalories, updateShowMaintenceCalories ] = useState(0)
    
    
    const handleSubtmit= (e  : React.SyntheticEvent ) =>{
         
        e.preventDefault()

        const form = e.target as typeof e.target & { 
            weightInput: {value: number},
            heightInput: {value: number},
            ageInput: {value: number},
            actInput: {value: number}            
        }
         

        const leftOp = 88.362 + (13.397 * form.weightInput.value) + (4.799 * form.heightInput.value) 
        const rightOp = 5.677 * form.ageInput.value
        updateCalories((leftOp - rightOp)* form.actInput.value)
        updateShowMaintenceCalories(1)
        console.log(form)
    }


    return (
        <div className="dietContainer">
             <h4>Calculadora de Calorias</h4>
             <form onSubmit={handleSubtmit}>
                <label className="input">
                    <p>Height</p>
                    <input name="heightInput" placeholder={"in cm"}/>
                </label>
                <hr />
                <label className="input">
                    <p>Weight</p>
                    <input name="weightInput" placeholder={"in kg"}/>
                </label>
                <hr />
                <label className="input">
                    <p>Age</p>
                    <input name="ageInput" placeholder={"years"}/>
                </label>
                <hr />
                <div className="buttonsContainer"> <p>  Activity Level: </p>
                    <label><input type="radio" name="actInput" value="1.2" />Little to no exercise</label>
                    <label><input type="radio" name="actInput" value="1.375" />1-3 days per week</label>
                    <label><input type="radio" name="actInput" value="1.55" />3-5 days per week</label>
                    <label><input type="radio" name="actInput" value="1.725" />6-7 days per week</label>
                    <label><input type="radio" name="actInput" value="1.9" />Twice per day, extra heavy workouts</label>
                </div>
                <div>
                    <button type="reset"> Reset</button>
                    <button type="submit"  >Submit</button>
                </div>
             </form>
            <div>
               {showMaintenceCalories && <div>
                    <p>Your maintance calories: </p>
                    {calories}
                </div>}
            </div>

        </div>
    )
}
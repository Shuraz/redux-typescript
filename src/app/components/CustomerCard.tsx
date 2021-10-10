import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addFood } from '../features/customerSlice';
interface CustomerCardTypes{
    id:string,
    name:string,
    food:string[]
}
function CustomerCard({id, name, food}:CustomerCardTypes) {
    const [newFood, setnewFood] = useState("");
    const dispatch = useDispatch();
    const handleFoodAdd=()=>{
      dispatch(addFood({id,food:newFood}))
      setnewFood("");
    }
    return (
        <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
              {
                  food.map(item=>{
                    return <p>{item}</p>
                  })
              }
          </div>
          <div className="customer-food-input-container">
            <input value={newFood} onChange={(e)=>{setnewFood(e.target.value)}}/>
            <button onClick={handleFoodAdd}>Add</button>
          </div>
        </div>
      </div>
    )
}

export default CustomerCard

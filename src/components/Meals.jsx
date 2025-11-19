import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [items,setItems] = useState([])
    console.log(items);
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            setItems(res.data.meals)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='items-container'>
        {
            items.map(({strMeal,strMealThumb,idMeal})=>(
                <div className='card' key={idMeal}>
                    <img src={strMealThumb} alt={strMeal} />
                    <div className='content'>
                        <p>{strMeal}</p>
                        <p>{idMeal}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Meals
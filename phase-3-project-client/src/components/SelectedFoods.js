import React from 'react';

function SelectedFoods({food, handleRemoveFromSelected}) {
  return <div>
      <h1>{food.name}</h1>
      <h6>1 serving of {food.name} is {food.calories} Calories</h6>
      <button style={{color : 'red'}} onClick={() => handleRemoveFromSelected(food)}>X</button>

      

  </div>;
}

export default SelectedFoods;

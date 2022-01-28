import React, {useState, useEffect} from 'react';

function NewFood() {

    const [formData, setFormData] = useState({
        name: "",
        calories: 0,
        category: "",
        image: "",
      });

function handleInput(event){
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        [event.target.id]: event.target.value,
      });
}
function handleSubmit() {
    // event.preventDefault();

    const newFood = {
      ...formData,
    };

    fetch('http://localhost:9292/foods', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((r) => r.json())
      .then();
    window.location.pathname = "/";
  }


  return <div>
      <h1>Add New Food!</h1>
        <div className="formHolder">
        <form className="foodForm" to='localhost.3000/'>
          <label>
            <input
              type="text"
              placeholder="Food Name"
              name="name"
              onChange={handleInput}
              value={formData.name}
              required={true}
              />
          </label>

          <br />
          <label>
            <input
              type="text"
              placeholder="Calories per serving"
              name="calories"
              onChange={handleInput}
              value={formData.calories}
              rules={[{required: true}]}
              />
          </label>
          <br />
            <label>
              <select name="category" onChange={handleInput}>
                <option value="">Category</option>
                <option value="bread">Bread</option>
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
                <option value="protein">Protein</option>
                <option value="grain">Grain</option>
                <option value="condiment">Condiment</option>
                <option value="dressing">Dressing</option>
              </select>
            </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              onChange={handleInput}
              value={formData.image}
              required
              />
          </label>
          <br />
          <input type="submit" onClick={handleSubmit}></input>
        </form>

  </div>;
  </div>;

}
export default NewFood;

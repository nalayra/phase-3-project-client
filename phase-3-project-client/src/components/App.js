import "../App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import FoodTracker from "./FoodTracker";
import HomePage from "./HomePage";
import CardContainer from "./CardContainer";
import SelectedFoods from "./SelectedFoods";
import { ListGroup } from "react-bootstrap";
import MealMaker from "./MealMaker";
import NewFood from "./NewFood";

function App() {
  const [foods, setFoods] = useState([]);
  const [eatenFood, setEatenFood] = useState([]);
  const [updateFoods, setUpdateFoods] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [totalCal, setTotalCal] = useState(0);
  const [day, setDay] = useEffect(() => {
    console.log("Loading....");
    getFoods();
  }, []);

  const getFoods = () => {
    fetch("http://localhost:9292/foods")
      .then((r) => r.json())
      .then((food) => {
        console.log(food);
        setFoods(food);
      });
  };

  function handleDeleteFood(id) {
    // alert('You dont like '`${foods.filter((food) => food.id === id)[0].name}`+ '? Grow up')
    fetch("http://localhost:9292/foods/" + id, {
      method: "DELETE",
    }).then(() => {
      setFoods(foods.filter((food) => food.id !== id));
    });
  }

  function submitMeal() {
    if (selectedFoods.length < 1) {
      alert("you gotta eat something ya fatass!");
    } else {
      console.log("thank you");

      const newFood = {
        ...selectedFoods,
        day: day,
      };
      fetch("http://localhost:9292/eats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
      })
        .then((r) => r.json())
        .then();
      setSelectedFoods([]);
      setTotalCal(0);
    }
  }

  function handleRemoveFromSelected(food) {
    setSelectedFoods(selectedFoods.filter((selected) => selected !== food));
    setTotalCal((totalCal) => totalCal - food.calories);
  }

  function handleSelected(food) {
    setSelectedFoods([...selectedFoods, food]);
    setTotalCal((totalCal) => totalCal + food.calories);
    console.log(selectedFoods);
  }

  //Adds Ingredients above "Total calories in this meal:"
  const mappedSelected = selectedFoods.map((food) => (
    <SelectedFoods
      key={food.id}
      food={food}
      handleRemoveFromSelected={handleRemoveFromSelected}
    />
  ));

  function handleChange(e) {
    setCategory(e.target.value);
    console.log(category);
  }
  function handleClearSelected() {
    setSelectedFoods([]);
    setTotalCal(0);
  }

  const handleFilter = (category) => {
    console.log("category: " + category);
    if (category === "a") {
      return foods;
    } else {
      return foods.filter((item) => {
        return category === item.category;
      });
    }
  };

  const mappedFoods = (foods) =>
    foods.map((food) => {
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>;
      return (
        <CardContainer
          key={food.id}
          food={food}
          handleSelected={handleSelected}
          handleDeleteFood={handleDeleteFood}
        />
      );
    });
  const displaycardResults = mappedFoods(handleFilter(category));

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/meal_maker"
          element={
            <MealMaker
              handleChange={handleChange}
              mappedSelected={mappedSelected}
              handleClearSelected={handleClearSelected}
              submitMeal={submitMeal}
              displaycardResults={displaycardResults}
              totalCal={totalCal}
            />
          }
        ></Route>
        <Route path="/new_food" element={<NewFood />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/tracker"
          element={<FoodTracker foods={foods} updateFoods={updateFoods} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

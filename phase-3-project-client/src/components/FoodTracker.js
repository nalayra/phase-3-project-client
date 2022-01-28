import React, { useState, useEffect } from "react";
import { ListGroup, Card } from "react-bootstrap";

function FoodTracker() {
  const [dbJSON, setDBJSON] = useState([]);
  const [timeSON, setTimeSON] = useState([]);
  const [weeklyCal, setWeeklyCal] = useState(0);

  useEffect(() => {
    getEatsDBJSON();
    // getTimeDBJSON();
  }, []);

  function getEatsDBJSON() {
    fetch("http://localhost:9292/eats")
      .then((response) => response.json())
      .then((newJSON) => {
        console.log(newJSON);
        setDBJSON(newJSON);
      });
  }

  // function getTimeDBJSON() {
  //   fetch("http://localhost:9292/meals")
  //     .then((response) => response.json())
  //     .then((newTimeJSON) => {
  //       console.log(newTimeJSON);
  //       setTimeSON(newTimeJSON);
  //     });
  // }

  const displayFoodDates = timeSON.map((time) => {
    console.log(time);
    return <ListGroup.Item>{time}</ListGroup.Item>;
  });

  //const checkDay
  //Check if day matches, if it does then add to the table
  //If day doesn't match, then add new table
  //Then, weeklyCal = tables all added up

  const weeklyTotalCal = () => {
    let totalCal = 0;
    console.log(dbJSON);
    totalCal = dbJSON.reduce((a, food) => (a = a + food.calorie_count), 0);
    console.log(totalCal);
    return totalCal;
  };

  const displayEatenResults = dbJSON.map((food) => {
    console.log(food.calorie_count);
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  });

  return (
    <div>
      <h1>Weekly Calorie Log</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{displayFoodDates}</Card.Header>
        <ListGroup variant="flush">{displayEatenResults}</ListGroup>
      </Card>
      <row>
        <ListGroup.Item>{weeklyTotalCal()}</ListGroup.Item>
      </row>
    </div>
  );
}

export default FoodTracker;

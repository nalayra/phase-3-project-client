import React, { useState, useEffect } from "react";
import { ListGroup, Card } from "react-bootstrap";

function FoodTracker() {
  const [dbJSON, setDBJSON] = useState([]);
  const [timeSON, setTimeSON] = useState([]);
  const [weeklyCal, setWeeklyCal] = useState(0);
  const [monday, setMonday] = useState([])
  const [tuesday, setTuesday] = useState([])
  const [wednesday, setWednesday] = useState([])
  const [thursday, setThursday] = useState([])
  const [friday, setFriday] = useState([])
  const [saturday, setSaturday] = useState([])
  const [sunday, setSunday] = useState([])

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
    if(food.day === 'sunday'){
        sunday.push(food)
        
      }else if(food.day === 'monday'){
        monday.push(food)
        
      }else if(food.day === 'tuesday'){
        tuesday.push(food)
        
      }else if(food.day === 'wednesday'){
        wednesday.push(food)
        
      }else if(food.day === 'thursday'){
        thursday.push(food)
        
      }else if(food.day === 'friday'){
        
        friday.push(food)
      } else
      saturday.push(food)
      
  });

  console.log(tuesday)
  
  const displaySunday = sunday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displayMonday = monday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displayTuesday = tuesday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displayWednesday = wednesday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displayThursday = thursday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displayFriday = friday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })
  const displaySaturday = saturday.map((food) => {
    return (
      <ListGroup.Item>
        {JSON.parse(food.foods_list)} -Calories:{food.calorie_count}
      </ListGroup.Item>
    );
  })

console.log(sunday)

  return (
    <div>
      <h1>Weekly Calorie Log</h1>
      {sunday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Sunday</strong></Card.Header>
        <ListGroup variant="flush">{displaySunday}</ListGroup>
      </Card>: null}
      {monday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Monday</strong></Card.Header>
        <ListGroup variant="flush">{displayMonday}</ListGroup>
      </Card>: null}
      {tuesday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Tuesday</strong></Card.Header>
        <ListGroup variant="flush">{displayTuesday}</ListGroup>
      </Card>: null}
      {wednesday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Wednesday</strong></Card.Header>
        <ListGroup variant="flush">{displayWednesday}</ListGroup>
      </Card>: null}
      {thursday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Thursday</strong></Card.Header>
        <ListGroup variant="flush">{displayThursday}</ListGroup>
      </Card>: null}
      {friday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Friday</strong></Card.Header>
        <ListGroup variant="flush">{displayFriday}</ListGroup>
      </Card>: null}
      {saturday.length > 0 ? <Card style={{ width: "18rem" }}>
        <Card.Header><strong>Saturday</strong></Card.Header>
        <ListGroup variant="flush">{displaySaturday}</ListGroup>
      </Card>: null}
      <row>
        <ListGroup.Item><strong>Total Cals this week: {weeklyTotalCal()} --- Average Cals per day {weeklyTotalCal()/7}</strong></ListGroup.Item>
      </row>
    </div>
  );
}

export default FoodTracker;

import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";



function MealMaker({handleChange, mappedSelected, handleClearSelected, submitMeal, displaycardResults, totalCal, handleDay }) {

  return <div>

    <Container>
        <Row>
          <Col>Let's Measure your Foods!</Col>

          <Col>
            <label>
              Select a category to get started
              <select name="category" onChange={handleChange}>
                <option value="">-Select One-</option>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="selectedFoods">{mappedSelected}</div>
            <Row>
              <h2>Total calories in this meal: {totalCal}</h2>
              <label>
              Day you ate this
              <select name="category" onChange={handleDay}>
                <option value="">-Select One-</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>
            </label>
              <button style={{ color: "red" }} onClick={handleClearSelected}>
                Clear This Meal
              </button>
              <button style={{ color: "green" }} onClick={submitMeal}>
                Submit This Meal!
              </button>
            </Row>
          </Col>
          <Col>
            <div id="cardResults">{displaycardResults}</div>
          </Col>
        </Row>
      </Container>

  </div>;
}

export default MealMaker;
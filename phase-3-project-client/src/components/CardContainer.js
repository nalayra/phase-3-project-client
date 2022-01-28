import {
  Card,
  ListGroupItem,
  ListGroup,
  CardGroup,
  Row,
  Col,
} from "react-bootstrap";

function CardContainer({ food, handleSelected, handleDeleteFood }) {
  return (
    <div>
    <div
      className="food_card"
      key={food.id}
      onClick={() => handleSelected(food)}
    >
      <span>
        <img
          alt="none loaded :("
          src={food.image}
          className="food_image"
          style={{ width: "50px" }}
        />
      </span>
      <span className="episode_title"> {food.name} </span>
    </div>
      <button onClick={() => handleDeleteFood(food.id)}>Delete {food.name}</button>
    </div>
  );
}
export default CardContainer;

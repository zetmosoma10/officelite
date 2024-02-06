import Button from "./Button";
import classnames from "classnames";

function Card({ children, type }) {
  const cardType = type && `card--${type}`;
  const allClasses = classnames(cardType);
  return <div className={`card ${allClasses}`}>{children}</div>;
}

export default Card;

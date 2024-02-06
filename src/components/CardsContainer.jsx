import Button from "./Button";
import Card from "./Card";

function CardsContainer() {
  return (
    <div className="grid cols-3 card-container">
      <Card>
        <div className="card__info">
          <p className="card__type">Basic</p>
          <h2 className="card__price">Free</h2>
          <p className="card__monthly-cycle">Up to 5 users for free</p>
        </div>
        <ul className="card__listItems">
          <li>Basic document collaboration</li>
          <li>2 GB storage</li>
          <li>Great security and support</li>
        </ul>
        <Button className="btn" size="sm" color="blue">
          Try for Free
        </Button>
      </Card>
      <Card type="pro">
        <div className="card__info">
          <p className="card__type">Pro</p>
          <h2 className="card__price">$9.99</h2>
          <p className="card__monthly-cycle">Per user, billed monthly</p>
        </div>
        <ul className="card__listItems">
          <li>All essential integrations</li>
          <li>50 GB storage</li>
          <li>More control and insights</li>
        </ul>
        <Button className="btn" size="sm" color="white">
          Try for Free
        </Button>
      </Card>
      <Card>
        <div className="card__info">
          <p className="card__type">Ultimate</p>
          <h2 className="card__price">$19.99</h2>
          <p className="card__monthly-cycle">Per user, billed monthly</p>
        </div>
        <ul className="card__listItems">
          <li>Robust work management</li>
          <li>100 GB storage</li>
          <li>VIP support</li>
        </ul>
        <Button className="btn" size="sm" color="grey">
          Try for Free
        </Button>
      </Card>
    </div>
  );
}

export default CardsContainer;

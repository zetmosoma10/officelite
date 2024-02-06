import Button from "./components/Button";
import Card from "./components/Card";
import CardsContainer from "./components/CardsContainer";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const targetDate = new Date("2024-02-09T23:59:59");

  return <CountdownTimer targetDate={targetDate} />;
}

export default App;

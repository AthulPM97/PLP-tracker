import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/UI/Card";

const days = [
  { day: "push day", currentDay: true },
  { day: "pull day", currentDay: false },
  { day: "leg day", currentDay: false },
];

const Home = () => {
  const history = useHistory(); 

  const dayCards = days.map((day) => <Card day={day} key={day.day} />);
  return (
    <div>
      <React.Fragment>{dayCards}</React.Fragment>
      <button onClick={history.push('/draw')}>Draw</button>
    </div>
  );
};

export default Home;

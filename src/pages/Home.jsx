import React from "react";
import Card from "../components/UI/Card";

const days = [
  { day: "push day", currentDay: true },
  { day: "pull day", currentDay: false },
  { day: "leg day", currentDay: false },
];

const Home = () => {
  const dayCards = days.map((day) => <Card day={day} key={day.day} />);
  return <React.Fragment>{dayCards}</React.Fragment>;
};

export default Home;

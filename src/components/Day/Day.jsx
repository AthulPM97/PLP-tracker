const Day = (props) => {
  const exercises = props.workouts.map((item) => {
    return <h1>{item.name}</h1>;
  });

  return <div>{exercises}</div>;
};

export default Day;

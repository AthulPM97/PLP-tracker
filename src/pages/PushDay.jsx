import { useState } from "react";
import Day from "../components/Day/Day";
import useHttp from "../hooks/use-http";

const PushDay = () => {
  const { error, sendRequest } = useHttp();

  const [exercisesArray, setExercisesArray] = useState([]);

  sendRequest(
    {
      url: "https://workout-tracker-d956e-default-rtdb.firebaseio.com/pushday.json",
    },
    (data) => {
        const keys = Object.keys(data);
        let exercisesArray = [];
        keys.forEach((key) => {
            let itemWithId = {
                ...data[key],
                id: key,
            };
            exercisesArray = [...exercisesArray, itemWithId];
        });
        setExercisesArray(exercisesArray);
    }
  );
  if (error) console.log(error);
  return <Day workouts={exercisesArray} />;
};

export default PushDay;

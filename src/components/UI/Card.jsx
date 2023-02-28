import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  //history
  const history = useHistory();

  const muscleGroup = props.day.day.replace(" ", "-");

  //handlers
  const redirectHandler = () => {
    history.push(`/${muscleGroup}`);
  };

  return (
    <IonCard onClick={redirectHandler}>
      <IonCardHeader>{props.day.day}</IonCardHeader>
      {props.day.currentDay && <IonCardContent>Today</IonCardContent>}
    </IonCard>
  );
};

export default Card;

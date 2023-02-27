import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from "@ionic/react";
import { useState } from "react";

const Card = (props) => {
    
  return (
    <IonCard>
      <IonCardHeader>{props.day.day}</IonCardHeader>
      {props.day.currentDay && <IonCardContent>Today</IonCardContent>}
    </IonCard>
  );
};

export default Card;

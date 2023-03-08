import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem } from "@ionic/react";

const Day = (props) => {
  const exercises = props.workouts.map((item) => {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{item.name}</IonCardTitle>
          <IonCardSubtitle>{item.currentLoad}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput value={item.sets[0]}/>
          </IonItem>
        </IonCardContent>
      </IonCard>
    );
  });

  return <div>{exercises}</div>;
};

export default Day;

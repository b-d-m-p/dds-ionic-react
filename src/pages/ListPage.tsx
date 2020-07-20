import React from 'react'
import {
  IonItem,
  IonLabel,
  IonContent,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonPage,
  IonText,
} from '@ionic/react'

import './ListPage.css'

export const ListPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>List Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonItem>
        <p>A list of stock components, demos & other available references.</p>
      </IonItem>
      <IonItem>
        <IonText color="primary">
          <h1>Demo pages</h1>
        </IonText>
      </IonItem>
      <IonItem routerLink="/demos/SignInPage">
        <IonLabel>
          <h2>Sign In Page</h2>
          <p>Demo of the Sign Up & Sign In pages</p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonText color="primary">
          <h1>Select Ionic components for reference</h1>
        </IonText>
      </IonItem>
      <IonItem routerLink="/reference/ItemsExample">
        <IonLabel>
          <h2>ItemsExample</h2>
          <p>
            A list of various Ionic items and how they can be used with other
            components internally.
          </p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonText color="primary">
          <h1>Other</h1>
        </IonText>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>Some other thing</h2>
          <p>Explanation of some other thing.</p>
        </IonLabel>
      </IonItem>
    </IonContent>
  </IonPage>
)

export default ListPage

import {IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import PageNav from "../components/Nav";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Work Diary App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                The world is your oyster.
                <p>
                    If you get lost, the{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
                        docs
                    </a>{' '}
                    will be your guide.
                </p>

            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <PageNav></PageNav>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Home;

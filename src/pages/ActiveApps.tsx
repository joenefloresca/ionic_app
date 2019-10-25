import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import PageNav from '../components/Nav';


const ActiveApps: React.FC = () => {

    let activeApps = [
        {index: 1, title: 'Google Chrome'},
        {index: 2, title: 'Google Chrome'},
        {index: 3, title: 'Google Chrome'},
        {index: 4, title: 'Google Chrome'},
        {index: 5, title: 'Google Chrome'},
        {index: 6, title: 'Google Chrome'},
        {index: 7, title: 'Google Chrome'},
        {index: 8, title: 'Google Chrome'},
        {index: 9, title: 'Google Chrome'},
        {index: 10, title: 'Google Chrome'},
    ];

    let listItems = activeApps.map(function (item, i) {
        return (
            <IonCard key={i}>
                <IonCardHeader>
                    <IonCardTitle>
                        {item.index}
                    </IonCardTitle>
                    <IonCardSubtitle>
                        {item.title}
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton>Read</IonButton>
                </IonCardContent>
            </IonCard>
        );
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Work Diary App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {listItems}
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <PageNav></PageNav>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ActiveApps;

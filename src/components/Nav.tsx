import {IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import React from 'react';

export const Nav: React.FC = () => (

    <IonTabs>
        <IonRouterOutlet>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

            <IonTabButton tab="home" href="/home">
                <IonIcon name="home"/>
                <IonLabel>Home</IonLabel>
                <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="activeapps" href="/activeapps">
                <IonIcon name="home"/>
                <IonLabel>Active Apps</IonLabel>
            </IonTabButton>

        </IonTabBar>
    </IonTabs>


);

export default Nav;
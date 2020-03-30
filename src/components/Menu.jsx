import React from 'react'
import {IonSegment, IonSegmentButton} from '@ionic/react'

const Menu = () => {
    return (
        <IonSegment>
           <IonSegmentButton>Sports</IonSegmentButton>
           <IonSegmentButton>Finance</IonSegmentButton>
           <IonSegmentButton>News</IonSegmentButton>
        </IonSegment>
    )
}

export default Menu

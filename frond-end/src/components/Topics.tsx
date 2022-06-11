import React, { useState, useEffect } from 'react';
// import './Topic.css';
import firebase from '../firebase';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

interface ContainerProps { }
const Topics: React.FC<ContainerProps> = () => {
    const [topics, setTopics] = useState<any>([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('topics')
            .get()
            .then((collectionSnpashot) => {
                const data = collectionSnpashot.docs.map((doc) => {
                    return doc.data();
                });
                console.log(data);
                setTopics(data);

            });
    }, [])

    return (
        <div className="container">
            <strong>Ready to create an app?</strong>
            <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
            <IonList>
                {
                    topics.map((topic: any) => {
                        return (
                            <IonItem>
                                <IonLabel key={topic.name}>{topic.name}</IonLabel>
                            </IonItem>
                        )
                    })
                }


            </IonList>
        </div>

    );
};
export default Topics;

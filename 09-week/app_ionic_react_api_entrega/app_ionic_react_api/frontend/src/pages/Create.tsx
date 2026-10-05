import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../api';

export const Create: React.FC = () => {
  const history = useHistory();
  const [present] = useIonToast();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!name.trim() || price === '') {
      setError('Name and price are required.');
      return;
    }

    try {
      setLoading(true);

      await createProduct({
        name: name.trim(),
        price: Number(price),
        description: description.trim()
      });

      await present({
        message: 'Product created successfully!',
        duration: 1500,
        position: 'bottom'
      });

      history.push('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Create Product</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput
              value={name}
              placeholder="Example: Wireless Mouse"
              onIonInput={(e) => setName(e.detail.value ?? '')}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Price</IonLabel>
            <IonInput
              type="number"
              value={price}
              placeholder="50000"
              onIonInput={(e) => setPrice(e.detail.value ?? '')}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonTextarea
              value={description}
              placeholder="Describe the product"
              autoGrow
              onIonInput={(e) => setDescription(e.detail.value ?? '')}
            />
          </IonItem>

          {error && <p className="form-error">{error}</p>}

          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Product'}
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

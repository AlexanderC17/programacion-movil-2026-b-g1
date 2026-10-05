import { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api';
import { Product } from '../types';

interface RouteParams {
  id: string;
}

export const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Could not load product.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Product Detail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {loading && (
          <div className="center-message">
            <IonSpinner name="crescent" />
            <p>Loading...</p>
          </div>
        )}

        {error && !loading && (
          <IonCard color="danger">
            <IonCardContent>{error}</IonCardContent>
          </IonCard>
        )}

        {product && !loading && !error && (
          <IonCard>
            <IonCardContent>
              <h1>{product.name}</h1>
              <h2>${product.price.toLocaleString('es-CO')}</h2>
              <p>{product.description || 'No description available.'}</p>
              <p><strong>ID:</strong> {product.id}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

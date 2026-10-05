import { useCallback, useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add, refresh } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../api';
import { Product } from '../types';

export const Home: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Manager</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => history.push('/create')}>
          <IonIcon slot="start" icon={add} />
          Create Product
        </IonButton>

        {loading && (
          <div className="center-message">
            <IonSpinner name="crescent" />
            <p>Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <IonCard color="danger">
            <IonCardContent>
              <strong>Error:</strong> {error}
              <IonButton expand="block" fill="outline" onClick={loadProducts}>
                <IonIcon slot="start" icon={refresh} />
                Try Again
              </IonButton>
            </IonCardContent>
          </IonCard>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="center-message">
            <p>No products found.</p>
          </div>
        )}

        {!loading &&
          !error &&
          products.map((product) => (
            <IonCard
              key={product.id}
              button
              onClick={() => history.push(`/product/${product.id}`)}
            >
              <IonCardHeader>
                <IonCardSubtitle>Product #{product.id}</IonCardSubtitle>
                <IonCardTitle>{product.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <strong>${product.price.toLocaleString('es-CO')}</strong>
                <p>{product.description}</p>
              </IonCardContent>
            </IonCard>
          ))}
      </IonContent>
    </IonPage>
  );
};

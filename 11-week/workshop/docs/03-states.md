# CP3 - Estados de Mis pedidos

La lista usa los pedidos guardados por `ShopStore` en SharedPreferences. La lectura tiene tres resultados visibles: carga, error recuperable o lista vacía/con datos. El retraso y el error se pueden forzar sin modificar el servicio:

```powershell
flutter run -d chrome --dart-define=ICA_ORDERS_DELAY_MS=1800
flutter run -d chrome --dart-define=ICA_ORDERS_FAILURE=true
```

Para el estado vacío, inicia la app demo sin confirmar pedidos. Para el estado con datos, agrega un helado y confirma un pedido simulado. Al reintentar después de una falla, la lista se vuelve a leer desde las preferencias locales.

La prueba de error/reintento está escrita en `app/frontend/test/orders_test.dart` y pasó localmente con Flutter 3.47.2 mediante `flutter test --no-pub test/orders_test.dart` desde `app/frontend`. Se añadirá en el segundo push de CP3.

## Evidencia

Guardar capturas reales en `docs/img/` con estos nombres:

- `after-orders-loading.png`
- `after-orders-error.png`
- `after-orders-empty.png`
- `after-orders-data.png`

Pendientes: tomar las capturas reales en navegador y publicar el checkpoint. El servidor web local compiló y sirvió la app en `http://127.0.0.1:8765`; aún no se inspeccionó visualmente porque no hay una sesión de navegador conectada.

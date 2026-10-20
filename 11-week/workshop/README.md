# Taller guiado W11 - UX/UI en ICA

## CP0 - Preparación y línea base

La carpeta `app/` contiene una copia de la app ICA del equipo en Flutter. La copia de referencia conserva sus pantallas de catálogo, personalización, carrito y pedidos. No se incluyeron credenciales, `node_modules` ni salidas de compilación. La app inicia en modo demo sin servidor; los pedidos de demo no se envían ni generan cobros.

Para abrir la app en Chrome, desde `app/frontend`:

```powershell
flutter pub get
flutter run -d chrome
```

El taller usa ejemplos Ionic React, pero el proyecto ICA es Flutter. Los componentes y patrones se implementarán con sus equivalentes de Flutter y Dart.

## Alcance individual

El trabajo individual se enfocará en las pantallas de perfil de usuario, registro de usuario y detalle de compra. El proyecto base aún no tiene cuentas de usuario; el registro y el perfil se tratarán como pantallas nuevas. Para los checkpoints de la entrega 1, la auditoría y la lista se enfocan en `Mis pedidos` y `Confirmar pedido`, que no hacen parte del catálogo ni de la personalización trabajados por los compañeros.

<!-- CONFIG-START -->
- FULL_NAME: PENDIENTE - confirmar con el estudiante
- GITHUB_USER: AlexanderC17
- TEAM: ICA / Ice Cream App
- DOCS_REPO: https://github.com/code-corhuila/ica-docs
- CODE_REPO: https://github.com/pablo12968/ica.app
- BASELINE: commit del taller `1d6929b`; código fuente ICA `6d7882d`
- REFLECTION_DOC: PENDIENTE - crear y compartir como Editor con el docente
- MY_SCREENS: Mis pedidos, perfil de usuario, registro de usuario y detalle de compra
<!-- CONFIG-END -->

## Estado de entrega

- CP0: línea base copiada y commit `chore(w11): import baseline of team app` publicado en el fork.
- SDK local del taller: Flutter 3.47.2 / Dart 3.13.2, instalado en `.tools/flutter`.
- CP1: auditoría y mapa preparados; faltan las dos capturas reales `before-` porque no hay navegador conectado a esta sesión.
- CP2: patrón de pestañas y pila documentado, y tokens de tema implementados. `dart format` se ejecutó.
- CP3 local: estados de carga, error y lista vacía implementados para `Mis pedidos`; el servidor web local arrancó y `flutter test --no-pub test/orders_test.dart` pasó. Falta capturar pantallas reales, publicar el checkpoint y añadir el refresco en el segundo push.
- La reflexión es personal: el estudiante debe escribirla en Google Docs y completar el enlace anterior.

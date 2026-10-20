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
- Verificación local pendiente: el SDK disponible trae Dart 3.10.0 y la app requiere Dart 3.13.2; `flutter pub get --offline` no puede resolver el proyecto con esa versión.
- CP1: auditoría y mapa preparados; faltan las dos capturas reales `before-` por la limitación del SDK local.
- CP2: patrón de pestañas y pila documentado, y tokens de tema implementados. `dart format` se ejecutó; `flutter analyze` y la ejecución siguen pendientes porque el SDK local no satisface el `pubspec.lock` (Dart >=3.13.2 y Flutter >=3.44.0).
- La reflexión es personal: el estudiante debe escribirla en Google Docs y completar el enlace anterior.

# CP2 - Navegación y tokens de diseño

## Decisión de navegación

ICA tiene tres secciones principales que el usuario visita repetidamente: **Helados**, **Carrito** y **Mis pedidos**. Se conserva `NavigationBar` como navegación principal de tres pestañas. La confirmación del pedido se abre encima del carrito con `Navigator.push`, porque es un paso temporal del flujo. El detalle de compra se incorporará como una ruta de esa misma pila en el checkpoint de detalle.

La app ya tenía la barra inferior y la ruta de confirmación en la línea base. Este checkpoint consolida el tema para que las pantallas actuales y las nuevas usen la misma paleta, superficies, radios y espacios.

## Tokens implementados

Los valores se definen en `app/frontend/lib/design_tokens.dart` y se aplican desde `ThemeData` en `main.dart`.

| Token | Valor | Uso |
| --- | --- | --- |
| Primario | `#AB3E58` | Acciones principales y navegación seleccionada |
| Secundario | `#7A4B00` | Acciones/énfasis secundarios |
| Éxito | `#226B45` | Confirmación de pedido |
| Error | `#B3261E` | Errores de validación y envío |
| Fondo | `#FFFAF4` | Fondo de pantalla |
| Superficie | `#FFFFFF` | Tarjetas y campos |
| Texto | `#30221F` | Texto principal |
| Espacios | 4, 8, 16, 20 y 24 dp | Separación entre elementos |
| Radios | 18 y 24 dp | Campos y tarjetas |

## Contraste

Relaciones calculadas con la fórmula WCAG para luminancia relativa sRGB. El mínimo para texto normal es 4.5:1.

| Texto | Fondo | Relación | Resultado |
| --- | --- | ---: | --- |
| `#30221F` | `#FFFAF4` | 14.72:1 | Cumple |
| `#30221F` | `#FFFFFF` | 15.28:1 | Cumple |
| `#FFFFFF` sobre primario `#AB3E58` | `#AB3E58` | 5.90:1 | Cumple |
| `#FFFFFF` sobre secundario `#7A4B00` | `#7A4B00` | 7.41:1 | Cumple |
| `#FFFFFF` sobre éxito `#226B45` | `#226B45` | 6.45:1 | Cumple |
| `#FFFFFF` sobre error `#B3261E` | `#B3261E` | 6.54:1 | Cumple |

Los colores de estado se acompañan con texto e iconos; el color no es la única señal. La revisión de los tamaños pequeños y de los estados del formulario queda documentada en CP4.

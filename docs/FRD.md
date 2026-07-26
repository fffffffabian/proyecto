# Functional Requirements Document (FRD)

## Funcionalidad

Realizar un pedido en línea para entrega a domicilio y darle seguimiento hasta la entrega.

Este documento describe, pantalla por pantalla, las tres funcionalidades Must del PRD:

1. Realizar pedidos en línea → Pantallas 1, 2 y 3.
2. Confirmación inmediata del pedido → Pantalla 4.
3. Seguimiento del estado del pedido → Pantalla 5.

---

## Pantalla 1 – Menú

### Usuario visualiza

- Productos
- Precio
- Imagen
- Botón Agregar al carrito

### Entrada

- Producto
- Cantidad
- Observaciones

### Salida

- Producto agregado al carrito
- Total actualizado

### Casos borde

- Si un producto está agotado, se muestra "No disponible" y el botón Agregar al carrito queda deshabilitado.
- Si la cantidad es 0 o queda vacía, el producto no se agrega y se solicita una cantidad válida (mínimo 1).

---

## Pantalla 2 – Carrito

### Usuario visualiza

- Productos seleccionados
- Cantidades
- Total

### Entrada

- Modificar cantidad
- Eliminar producto

### Salida

- Total actualizado

### Casos borde

- Si el carrito está vacío, se muestra "Tu carrito está vacío" y el botón Continuar queda deshabilitado.
- Si la cantidad de un producto se reduce a 0, el producto se elimina del carrito.

---

## Pantalla 3 – Datos de entrega

### Usuario visualiza

Formulario con:

- Nombre
- Teléfono
- Dirección
- Método de pago

### Entrada

Información del cliente.

### Salida

Costo de envío.
Total final.

### Casos borde

- Si la dirección de entrega está vacía, se muestra "La dirección de entrega es obligatoria." y el botón Confirmar permanece deshabilitado.
- Si el teléfono no tiene un formato válido, se muestra "Ingresa un teléfono válido."
- Si la dirección está fuera de la zona de cobertura, se muestra "Lo sentimos, aún no llegamos a tu zona." y no se permite continuar.

---

## Pantalla 4 – Confirmación

### Usuario visualiza

Resumen del pedido.

### Entrada

Botón Confirmar.

### Salida

Número de pedido.
Estado "Pedido recibido".

### Casos borde

- Si se pierde la conexión al confirmar, el pedido no se envía y se muestra "No pudimos enviar tu pedido, intenta de nuevo."

---

## Pantalla 5 – Seguimiento del pedido

### Usuario visualiza

- Número de pedido
- Estado actual con los pasos: Recibido → En preparación → En camino → Entregado
- Tiempo estimado de entrega

### Entrada

- Número de pedido (o acceso directo desde la pantalla de confirmación)

### Salida

- Estado del pedido actualizado en tiempo real

### Casos borde

- Si el número de pedido no existe, se muestra "No encontramos ese pedido."
- Si el pedido ya fue entregado, se muestra el estado final "Entregado" con la fecha y hora.
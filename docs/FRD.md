# Functional Requirements Document (FRD)

## Funcionalidad

Realizar un pedido en línea.

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

---

## Pantalla 4 – Confirmación

### Usuario visualiza

Resumen del pedido.

### Entrada

Botón Confirmar.

### Salida

Número de pedido.
Estado "Pedido recibido".

---

## Caso de error

Si el usuario deja vacía la dirección de entrega:

- Se muestra el mensaje:
  "La dirección de entrega es obligatoria."
- El botón Confirmar permanece deshabilitado.
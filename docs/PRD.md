# Product Requirements Document (PRD)

## Proyecto

Plataforma de pedidos en línea para Mr. Sushi (Mr Sushi Online).

## Problema

Actualmente muchos clientes deben llamar o escribir por WhatsApp para realizar sus pedidos, lo que genera tiempos de espera, errores en la toma de órdenes, dependencia del horario y la disponibilidad del personal, y una experiencia poco eficiente. Del lado del restaurante, tomar cada pedido a mano ocupa tiempo y se presta a equivocaciones en productos, direcciones y totales.

## Usuario objetivo

Jóvenes entre 18 y 35 años que viven o trabajan cerca de las sucursales de Mr. Sushi, acostumbrados a ordenar comida desde el celular y que valoran la rapidez y no tener que llamar para pedir.

## Historias de usuario

- Como cliente, quiero ver el menú con fotos y precios, para elegir sin tener que preguntar por WhatsApp.
- Como cliente, quiero agregar productos a un carrito y ver el total actualizado, para saber cuánto voy a pagar antes de confirmar.
- Como cliente, quiero ingresar mis datos de entrega una sola vez, para completar el pedido rápido.
- Como cliente, quiero recibir una confirmación inmediata con un número de pedido, para tener certeza de que mi orden entró.
- Como cliente, quiero consultar el estado de mi pedido en tiempo real, para saber cuándo llega sin tener que llamar.
- Como personal del restaurante, quiero recibir los pedidos ya escritos y estructurados, para reducir errores en la toma de órdenes.

## Funcionalidades principales (Must)

1. Realizar pedidos en línea — el cliente arma su pedido desde el menú, lo revisa en el carrito e ingresa sus datos de entrega.
2. Confirmación inmediata del pedido — al confirmar, el sistema genera un número de pedido y muestra el estado inicial "Pedido recibido".
3. Seguimiento del estado del pedido — el cliente consulta en tiempo real el avance del pedido (recibido, en preparación, en camino, entregado).

## Fuera de alcance (MVP)

Para la primera versión NO se incluye:

- Pago en línea con pasarela (procesar tarjeta dentro de la app). El método de pago se selecciona, pero el cobro se realiza contra entrega.
- Recoger en tienda o reserva de mesa; solo entrega a domicilio.
- Cuentas de usuario e historial de pedidos anteriores.
- Programa de lealtad, cupones o promociones.
- Reseñas y calificaciones de productos.
- Aplicación móvil nativa; la primera versión es web.

## Criterios de éxito

- Un cliente puede completar un pedido de principio a fin sin llamar ni escribir por WhatsApp.
- El pedido llega al restaurante con producto, cantidades, dirección y total correctos (menos errores de toma de orden).
- El cliente puede ver el estado de su pedido sin contactar al restaurante.
- El tiempo para armar y confirmar un pedido es menor a ~3 minutos.
- Disminuyen los pedidos tomados manualmente por teléfono o WhatsApp.

## MVP

La primera versión permitirá únicamente realizar pedidos para entrega a domicilio y consultar su estado, con pago contra entrega.
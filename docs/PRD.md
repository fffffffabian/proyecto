# Product Requirements Document (PRD)

## Proyecto

Food Flow: plataforma web SaaS de pedidos y entrega a domicilio para pequeñas y medianas empresas (PyMEs).

## Problema

Muchas PyMEs quieren vender a domicilio pero no tienen una plataforma propia: reciben los pedidos por teléfono o WhatsApp, lo que genera tiempos de espera, errores en la toma de órdenes (productos, direcciones y totales), dependencia del horario del personal y una experiencia poco eficiente tanto para el cliente como para el negocio. Contratar un desarrollo a la medida o pagar comisiones altas de un marketplace no siempre es viable para un negocio pequeño.

## Solución

Una plataforma donde cada PyME se registra y obtiene su propia tienda en línea (catálogo + carrito + seguimiento) y un panel para gestionar sus pedidos, sin necesidad de programar nada. La entrega la realiza cada empresa con sus propios repartidores; la plataforma organiza el pedido y su estado de principio a fin.

## Usuarios objetivo

- **Comercio (PyME):** dueños o encargados de negocios pequeños (comida, farmacia, abarrotes, ropa, etc.) que quieren vender a domicilio con su propia tienda en línea y dejar de tomar pedidos a mano.
- **Cliente final:** personas que quieren pedir de un negocio a domicilio desde el celular de forma rápida, sin llamar ni escribir por WhatsApp.

## Historias de usuario

### Comercio (PyME)

- Como dueño de una PyME, quiero registrar mi negocio y crear mi tienda, para vender a domicilio sin depender de WhatsApp.
- Como dueño, quiero cargar mis productos con nombre, precio y disponibilidad, para que mis clientes vean mi catálogo actualizado.
- Como dueño, quiero definir mi zona de cobertura y mi costo de envío, para entregar solo donde puedo y cobrar el envío correcto.
- Como dueño, quiero recibir los pedidos ya escritos y estructurados en un panel, para reducir errores en la toma de órdenes.
- Como dueño, quiero actualizar el estado de cada pedido (recibido, en preparación, en camino, entregado), para informar al cliente sin tener que llamarlo.

### Cliente final

- Como cliente, quiero ver el catálogo de la tienda con precios, para elegir sin preguntar.
- Como cliente, quiero agregar productos a un carrito y ver el total actualizado, para saber cuánto voy a pagar antes de confirmar.
- Como cliente, quiero ingresar mis datos de entrega una sola vez, para completar el pedido rápido.
- Como cliente, quiero recibir una confirmación inmediata con un número de pedido, para tener certeza de que mi orden entró.
- Como cliente, quiero consultar el estado de mi pedido en tiempo real, para saber cuándo llega sin tener que llamar.

## Funcionalidades principales (Must)

1. **Realizar pedidos en línea** — el cliente arma su pedido desde el catálogo de la tienda, lo revisa en el carrito e ingresa sus datos de entrega.
2. **Confirmación inmediata del pedido** — al confirmar, el sistema genera un número de pedido y muestra el estado inicial "Pedido recibido".
3. **Seguimiento del estado del pedido** — el cliente consulta en tiempo real el avance del pedido (recibido, en preparación, en camino, entregado).

## Fuera de alcance (MVP)

Para la primera versión NO se incluye:

- Registro y panel de administración del comercio (onboarding de la PyME). En esta versión los datos de la tienda y su catálogo se cargan por configuración; la gestión desde un panel queda para una versión posterior.
- Pago en línea con pasarela (procesar tarjeta dentro de la app). El método de pago se selecciona, pero el cobro se realiza contra entrega.
- Flota de repartidores de la plataforma ni asignación automática de riders; cada empresa entrega con sus propios repartidores.
- Seguimiento con GPS en el mapa; el estado lo actualiza manualmente el comercio.
- Recoger en tienda o reserva; solo entrega a domicilio.
- Cuentas e historial de pedidos para el cliente final.
- Programa de lealtad, cupones, promociones, reseñas o calificaciones.
- Aplicación móvil nativa; la primera versión es web.
- Cobro de comisiones/facturación a las PyMEs dentro de la plataforma.

## Criterios de éxito

- Un cliente puede completar un pedido de principio a fin sin llamar ni escribir por WhatsApp.
- El pedido llega al comercio con producto, cantidades, dirección y total correctos (menos errores de toma de orden).
- El cliente puede ver el estado de su pedido sin contactar al negocio.
- El tiempo para armar y confirmar un pedido es menor a ~3 minutos.

## MVP

La primera versión permite realizar un pedido a domicilio en la tienda de una PyME, confirmarlo y consultar su estado en tiempo real, con pago contra entrega y entrega a cargo de la propia empresa.

# Food Flow — Brand Brief

## What it is
Food Flow es una plataforma web donde pequeñas y medianas empresas ofrecen su propio servicio de pedidos a domicilio. El cliente entra al menú de la tienda, elige un producto, ve su detalle y lo agrega a su pedido, sin tener que llamar ni escribir por WhatsApp.

## Palette
- Primary: #A44A3F (terracota — barra superior, títulos y encabezados)
- Accent: #E4B363 (ámbar — se usa solo en los precios y en el botón principal)
- Background: #FAF3EA (crema cálido — fondo de todas las pantallas)

## Fonts
- Headings: Poppins
- Body: Open Sans

## Tone
Cercano, rápido, confiable. Not this: no se siente un marketplace corporativo frío ni con comisiones ocultas — nada de azul corporativo genérico ni fotos de stock de gente dándose la mano.

## Screens
- Menú (home)
- Detalle de producto
- Todas las pantallas comparten el mismo estilo de tarjeta (esquinas redondeadas de 16px, barra superior terracota y encabezados en Poppins), para que el Menú y el Detalle se vean como el mismo producto.

## Stack, pinned
Plain HTML, CSS and JavaScript reading a local JSON file, styled with Bootstrap 5 loaded from a
CDN. No framework, no npm, no build step.

Bootstrap 5 — two lines, both required:
```html
<!-- in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- just before </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

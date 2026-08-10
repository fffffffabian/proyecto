# Food Flow

Food Flow es una plataforma web donde pequeñas y medianas empresas (PyMEs) ofrecen su propio servicio de pedidos y entrega a domicilio. El cliente entra al menú de la tienda, abre un producto, lo agrega a su carrito y revisa su total, sin tener que llamar ni escribir por WhatsApp.

## Prototipo en vivo

🔗 **https://fffffffabian.github.io/proyecto/**

Se abre directo en el navegador (publicado con GitHub Pages). No hay que instalar nada; simplemente abre el enlace.

## Qué hace hoy (D2)

- **Menú (home):** muestra los productos de la tienda leídos desde `data/products.json`.
- **Detalle de producto:** abre un producto y permite **agregarlo al carrito**.
- **Carrito:** pantalla con los productos elegidos, cantidades, subtotal, envío y total; se puede modificar la cantidad, quitar productos y vaciar el carrito. El carrito se mantiene al moverse entre pantallas.

## Cómo está construido

HTML, CSS y JavaScript plano, con **Bootstrap 5** cargado desde CDN. Los datos se leen de archivos locales en `/data` (`products.json` y `businesses.json`). Sin framework, sin paso de build y sin base de datos.

## Pantallas

- `index.html` — Menú (home)
- `product.html` — Detalle de producto
- `cart.html` — Carrito

## Los tres Must

- Realizar pedidos en línea.
- Confirmación inmediata del pedido.
- Seguimiento del estado del pedido.

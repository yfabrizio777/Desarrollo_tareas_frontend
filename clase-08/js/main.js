import { contarPorCategoria, productos } from "./datos.js";
import formatearPrecio from "./formato.js";
import {
  agregarAlCarrito,
  aplicarDescuento,
  buscarPorNombre,
  masCaroDe,
  resumenCarrito,
} from "./carrito.js";
import { fichaProducto, resumenStock } from "./ui.js";

const catalogo = productos.map(
  ({ nombre, precio }) => `${nombre}: ${formatearPrecio(precio)}`,
);

console.log("Catálogo:", catalogo);
console.log("Productos por categoría:", contarPorCategoria(productos));
console.log("Ficha de producto:", fichaProducto(productos[0]));
console.log("Resumen de stock:", resumenStock(productos));

const productoOriginal = productos[0];
const productoConDescuento = aplicarDescuento(productoOriginal);
const productoConDescuentoEspecial = aplicarDescuento(productos[1], 20);

console.log("Descuento predeterminado:", productoConDescuento);
console.log("Descuento especial:", productoConDescuentoEspecial);
console.log("Producto original sin cambios:", productoOriginal);

const productoEncontrado = buscarPorNombre(productos, "iPad Mini");
const productoInexistente = buscarPorNombre(productos, "Magic Mouse");

console.log("Producto encontrado:", productoEncontrado);
console.log(
  "Búsqueda inexistente:",
  productoInexistente?.nombre ?? "Producto no encontrado",
);

const carritoInicial = [];
const carritoConMacBook = agregarAlCarrito(carritoInicial, productos[0]);
const carrito = agregarAlCarrito(carritoConMacBook, productos[3]);

console.log("Carrito inicial:", carritoInicial);
console.log("Carrito actual:", carrito);
console.log("Resumen del carrito:", resumenCarrito(carrito));
console.log("Producto más caro:", masCaroDe(productos));
